const { Client, Message } = require('azure-iot-device');
const { Mqtt } = require('azure-iot-device-mqtt');
const { spawn } = require('child_process');

// Device Connection String
const connectionString = 'HostName=StayAware-Test.azure-devices.net;DeviceId=Raspberry_Pi;SharedAccessKey=6KVw4ptUShd8m48q8w+roD/J1gG40xx5hAIoTJc1vMg=';

// Create the client using the connection string and the MQTT protocol
const client = Client.fromConnectionString(connectionString, Mqtt);

client.open(err => {
    if (err) {
        console.error('Could not connect to Azure IoT Hub:', err.toString());
    } else {
        console.log('Connected to Azure IoT Hub');

        client.onDeviceMethod('startScan', (request, response) => {
            console.log(`Direct method called: ${request.methodName}`);
            performVulnerabilityScan();

            response.send(200, 'Scan initiated', err => {
                if (err) console.error('Failed to send method response:', err.toString());
                else console.log('Response to method sent successfully.');
            });
        });
    }
});

function performVulnerabilityScan() {
    console.log("Initiating vulnerability scan...");

    const clamscanPath = '/usr/bin/clamscan'; // Ensure this is the correct path
    const scanArgs = ['-r', '-i', '-v',
                      '--exclude-dir=node_modules', // Excludes all node_modules directories
                      '/tmp', '/var/tmp', '/home', '/usr/bin', '/usr/local/bin'];
    const clamscan = spawn(clamscanPath, scanArgs);

    let scanOutput = ''; // Collects the entire output for parsing

    clamscan.stdout.on('data', (data) => {
        const dataStr = data.toString();
        console.log(dataStr); // Log each chunk of data in real-time
        scanOutput += dataStr; // Append to scanOutput for later parsing
    });

    clamscan.stderr.on('data', (data) => {
        console.error(`Scan error: ${data}`);
    });

    clamscan.on('close', (code) => {
        console.log(`Scan completed with exit code ${code}.`);
        if (code === 0 || code === 1) {
            const vulnerabilities = parseVulnerabilities(scanOutput);
            sendVulnerabilityReport({
                deviceId: "Raspberry_Pi",
                scanStatus: vulnerabilities.length > 0 ? 'Vulnerabilities Found' : 'No Vulnerabilities Found',
                timestamp: new Date().toISOString(),
                vulnerabilities
            });
        } else {
            // Even if the scan didn't complete successfully, report the attempt and error.
            sendVulnerabilityReport({
                deviceId: "Raspberry_Pi",
                scanStatus: 'Scan Error',
                errorMessage: `Scan process exited with code ${code}.`,
                timestamp: new Date().toISOString(),
            });
        }
    });
}

function parseVulnerabilities(scanOutput) {
    return scanOutput
        .split('\n')
        .filter(line => line.includes('FOUND'))
        .map(line => {
            const [path, detail] = line.split(': ');
            return {
                path: path.trim(),
                threat: detail.split(' ')[0].trim(),
                description: "Detected by ClamAV scan"
            };
        });
}

function sendVulnerabilityReport(reportData) {
    console.log('Preparing to send vulnerability report to Azure IoT Hub...');
    const message = new Message(JSON.stringify(reportData));

    message.properties.add('messageType', 'vulnerabilityReport');

    client.sendEvent(message, err => {
        if (err) {
            console.error('Failed to send vulnerability report:', err.toString());
        } else {
            console.log('Vulnerability report sent successfully.');
        }
    });
}

// Immediately perform a scan on startup and then schedule for every 24 hours
performVulnerabilityScan();
setInterval(performVulnerabilityScan, 24 * 60 * 60 * 1000);

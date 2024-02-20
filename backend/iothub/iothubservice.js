const iothub = require('azure-iothub');
const util = require('util');

// Pulls IoTHub Connection string from environment Variable
const connectionString = process.env.IOT_HUB_CONNECTION_STRING;
const registry = iothub.Registry.fromConnectionString(connectionString);
const Client = iothub.Client.fromConnectionString(connectionString);

 
// Function to send a message to the device
async function sendMessageToDevice(deviceId, message) {
  try {
    await Client.open();
    console.log(`Service client connected to IoT Hub to send a message to ${deviceId}`);
    const c2dMessage = new iothub.Message(message);
    await Client.send(deviceId, c2dMessage);
    console.log(`Message sent to device: ${deviceId}`);
    await Client.close();
    return { success: true, deviceId, message: 'Message sent successfully.' };
  } catch (error) {
    console.error(`Error sending message to device ${deviceId}: ${error.message}`);
    throw new Error('Failed to send message to device.');
  }
}


 // Function to register a device with the IoT hub.

 async function registerDevice(deviceId, deviceInfo) {
  const device = new iothub.Device(null);
  device.deviceId = deviceId;
  device.deviceInfo = deviceInfo;

  try {
    const response = await registry.create(device);

    // Accessing the properties from responseBody
    const deviceDetails = response.responseBody;
    console.log(`Device registered with IoT Hub: ${deviceDetails.deviceId}`);

    // Filters the response object
    return {
      deviceId: deviceDetails.deviceId,
      generationId: deviceDetails.generationId,
      status: deviceDetails.status,
      connectionState: deviceDetails.connectionState
    };
  } catch (error) {
    console.error(`Error registering device ${deviceId}: ${error.message}`);
    throw new Error('Failed to register device.');
  }
}

module.exports = { sendMessageToDevice, registerDevice };


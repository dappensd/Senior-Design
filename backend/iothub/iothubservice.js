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

 async function registerDevice(deviceId, deviceType, deviceSpecificData) {
  const device = new iothub.Device(null);
  device.deviceId = deviceId;

  // Log the incoming parameters for debugging
  console.log(`Attempting to register device. ID: ${deviceId}, Type: ${deviceType}, Specific Data: ${JSON.stringify(deviceSpecificData)}`);

  try {
    const response = await registry.create(device);
    const deviceDetails = response.responseBody;

    // Log the detailed response from IoT Hub
    console.log(`Device registered with IoT Hub: ${util.inspect(deviceDetails, { depth: null })}`);

    // Filters the response object to return essential details
    return {
      deviceId: deviceDetails.deviceId,
      deviceType,
      deviceSpecificData,
      generationId: deviceDetails.generationId,
      status: deviceDetails.status,
      connectionState: deviceDetails.connectionState,
    };
  } catch (error) {
    // Log the detailed error in case of failure
    console.error(`Error registering device ${deviceId}: ${util.inspect(error, { depth: null })}`);
    throw new Error('Failed to register device. See logs for more details.');
  }
}


module.exports = { sendMessageToDevice, registerDevice };


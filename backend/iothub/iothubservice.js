const iothub = require('azure-iothub');

// Your IoT Hub connection string should be set in your environment variables
const connectionString = process.env.IOT_HUB_CONNECTION_STRING;
const registry = iothub.Registry.fromConnectionString(connectionString);
const Client = iothub.Client.fromConnectionString(connectionString);

// Function to send a message to the device
async function sendMessageToDevice(deviceId, message) {
  try {
    await Client.open();
    console.log('Service client connected to IoT Hub');
    const c2dMessage = new iothub.Message(message);
    await Client.send(deviceId, c2dMessage);
    console.log('Message sent to:', deviceId);
  } catch (error) {
    console.error('Error sending message to device:', error);
    throw error; // Rethrow the error for handling in the calling function
  } finally {
    await Client.close();
  }
}

// Function to register a device with the IoT hub
async function registerDevice(deviceId, deviceInfo) {
  const device = new iothub.Device(null);
  device.deviceId = deviceId;
  
  // Optional: Add any additional device info or metadata
  device.deviceInfo = deviceInfo;

  try {
    // Register the device with the IoT hub
    const response = await registry.create(device);
    console.log('Device registered with IoT Hub:', response);
    return response;
  } catch (error) {
    console.error('Error registering device:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
}

module.exports = { sendMessageToDevice, registerDevice };

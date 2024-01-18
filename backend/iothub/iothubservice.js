const iothub = require('azure-iothub');
const connectionString = process.env.IOT_HUB_CONNECTION_STRING; // We will need to create an environment variable for this and store the connection string from IoT Hub

const serviceClient = iothub.ServiceClient.fromConnectionString(connectionString);

async function sendMessageToDevice(deviceId, message) {
  try {
    await serviceClient.open();
    console.log('Service client connected to IoT Hub');
    const c2dMessage = new iothub.Message(message);
    await serviceClient.send(deviceId, c2dMessage);
    console.log('Message sent to:', deviceId);
  } catch (error) {
    console.error('Error sending message to device:', error);
    throw error; // rethrow the error for handling in the calling function
  } finally {
    await serviceClient.close();
  }
}

module.exports = { sendMessageToDevice };
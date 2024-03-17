const axios = require('axios');

// This is the website LIFX uses for authentication via its API
const LIFX_API_BASE_URL = 'https://api.lifx.com/v1/';
const LIFX_API_TOKEN = process.env.LIFX_API_TOKEN; //This will need to be the variable that stores the authenticaton code the user enters
const lifxApiClient = axios.create({
    baseURL: LIFX_API_BASE_URL,
    headers: {
        'Authorization': `Bearer ${LIFX_API_TOKEN}`
    }
});

async function checkForUpdates(deviceId) {
    // Example function to check for software updates
    // Adjust the endpoint and logic based on LIFX API and your requirements
    try {
        const response = await lifxApiClient.get(`lights/${deviceId}`);
        // Process response to check for updates
        console.log(response.data);
        // Return update information or status
    } catch (error) {
        console.error('Error contacting LIFX API:', error.message);
        throw error;
    }
}

module.exports = { checkForUpdates };

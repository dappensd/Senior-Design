const { registerDevice } = require('./iothub/iothubservice');
const util = require('util');
require('dotenv').config(); 
const express = require('express');
const { Registry } = require('azure-iothub');
const { CosmosClient } = require('@azure/cosmos');

const connectionString = process.env.IOT_HUB_CONNECTION_STRING;
const registry = Registry.fromConnectionString(connectionString); 
const cosmosClient = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
const database = cosmosClient.database(process.env.COSMOS_DB_DATABASE_NAME);
const container = database.container(process.env.COSMOS_DB_CONTAINER_NAME);

async function registerLIFXDevice(deviceId, lifxDeviceInfo) {
    console.log('Registering LIFX device with device ID:', deviceId);

    // IoT Hub device registration
    try {
        const deviceInfoForIoTHub = {
            deviceId,
            tags: {
                deviceType: 'LIFX',
                model: lifxDeviceInfo.model,
                firmwareVersion: lifxDeviceInfo.firmwareVersion,
                capabilities: lifxDeviceInfo.capabilities,
            },
        };

        await registerDevice(deviceId, deviceInfoForIoTHub);
        console.log('LIFX Device registered successfully in IoT Hub');
    } catch (error) {
        console.error('Failed to register LIFX device in IoT Hub:', error);
        throw new Error('IoT Hub registration failed');
    }

    // Cosmos DB data persistence
    try {
        const { resource: createdItem } = await container.items.create({
            id: deviceId, // Ensure unique ID for Cosmos DB; using deviceId for simplicity
            ...lifxDeviceInfo, // Storing all provided LIFX device info
            createdAt: new Date().toISOString(), // Timestamp for when the item was created
        });

        console.log(`LIFX Device info stored in Cosmos DB with id: ${createdItem.id}`);
        return createdItem; // Returning the stored item might be useful for further processing
    } catch (error) {
        console.error('Failed to store LIFX device info in Cosmos DB:', error);
        throw new Error('Cosmos DB storage failed');
    }
}

module.exports = { registerLIFXDevice };

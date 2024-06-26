//This is for the registration of LIFX devices 

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { sendMessageToDevice } = require('../iothub/iothubservice');
const { CosmosClient } = require('@azure/cosmos');
const { registerDevice } = require('../iothub/iothubservice');
const util = require('util');

const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
const database = client.database('stayawaredb');
const container2 = database.container('iotDevices');


// Retrieve all devices
router.get('/devices', async (req, res) => {
    try {
        const { resources: devices } = await container2.items
            .query('SELECT * from c')
            .fetchAll();
        res.json(devices);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Retrieve a single device by ID
router.get('/devices/:id', async (req, res) => {
    try {
        const { resource: device } = await container2.item(req.params.id).read();
        if (device) {
            res.json(device);
        } else {
            res.status(404).send('Device not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Create a new device
router.post('/devices', async (req, res) => {
    try {
        const { resource: createdItem } = await container2.items.create(req.body);
        res.status(201).json(createdItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update an existing device
router.put('/devices/:id', async (req, res) => {
    try {
        const { resource: replacedItem } = await container2
            .item(req.params.id)
            .replace(req.body);
        res.json(replacedItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Delete a device
router.delete('/devices/:id', async (req, res) => {
    try {
        await container2.item(req.params.id).delete();
        res.send('Device deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/register-device', async (req, res) => {
    const { deviceId, deviceType, deviceSpecificData } = req.body;
    console.log('Request to register device:', util.inspect({ deviceId, deviceType, deviceSpecificData}, { depth: null }));

    try {
        const registrationResult = await registerDevice(deviceId, deviceType, deviceSpecificData);
        console.log('Result from registerDevice:', util.inspect(registrationResult, { depth: null }));
  
        const response = {
            deviceId: registrationResult.deviceId,
            deviceType,
            deviceSpecificData,
            generationId: registrationResult.generationId,
            status: registrationResult.status,
            connectionState: registrationResult.connectionState, 
        };

        // Insert the registered device into Cosmos DB
        const { resource: createdItem } = await container2.items.create({
            id: deviceId,
            deviceType,
            deviceSpecificData,
            generationId: response.generationId,
            status: response.status,
            connectionState: response.connectionState
            
        });

        console.log(`Device stored in Cosmos DB:`, util.inspect(createdItem, { depth: null }));

        // Send the response after all operations are successful
        res.status(201).json(response);

    } catch (error) {
        console.error('Error registering device or inserting into Cosmos DB:', error);
        // Check if headers have already been sent
        if (!res.headersSent) {
            res.status(500).send('Failed to register device or insert into Cosmos DB');
        } else {
            // Headers have been sent, cannot send another response
            console.error('Response already sent.');
        }
    }
});


module.exports = router;



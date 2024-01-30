const express = require('express');
const router = express.Router();
const passport = require('passport');
const { sendMessageToDevice } = require('./IoTHubService');
const { CosmosClient } = require('@azure/cosmos');

const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
const database = client.database('stayawaredb');
const container = database.container('iotDevices');

// Retrieve all devices
router.get('/devices', async (req, res) => {
    try {
        const { resources: devices } = await container.items
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
        const { resource: device } = await container.item(req.params.id).read();
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
        const { resource: createdItem } = await container.items.create(req.body);
        res.status(201).json(createdItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update an existing device
router.put('/devices/:id', async (req, res) => {
    try {
        const { resource: replacedItem } = await container
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
        await container.item(req.params.id).delete();
        res.send('Device deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/devices/:id/send-command', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { command } = req.body; 
        const deviceId = req.params.id;
        await sendMessageToDevice(deviceId, command);
        res.status(200).send(`Command sent to device ${deviceId}`);
    } catch (error) {
        console.error('Error sending command to device:', error);
        res.status(500).send('Failed to send command to device');
    }
});

module.exports = router;



const express = require('express');
const router = express.Router();
const passport = require('passport');
const { sendMessageToDevice } = require('./IoTHubService'); // Corrected import

let devices = [];

// Retrieve all devices
router.get('/devices', (req, res) => {
    res.json(devices);
});

// Retrieve a single device by ID
router.get('/devices/:id', (req, res) => {
    const device = devices.find(d => d.id === req.params.id);
    if (device) {
        res.json(device);
    } else {
        res.status(404).send('Device not found');
    }
});

// Create a new device
router.post('/devices', (req, res) => {
    const newDevice = req.body; // body needs to have the structure of the device
    devices.push(newDevice);
    res.status(201).send('Device created');
});

// Update an existing device
router.put('/devices/:id', (req, res) => {
    const deviceIndex = devices.findIndex(d => d.id === req.params.id);
    if (deviceIndex !== -1) {
        // Update the device information. Also need to validate the updated data.
        devices[deviceIndex] = req.body;
        res.send('Device updated');
    } else {
        res.status(404).send('Device not found');
    }
});

// Delete a device
router.delete('/devices/:id', (req, res) => {
    const deviceIndex = devices.findIndex(d => d.id === req.params.id);
    if (deviceIndex !== -1) {
        devices.splice(deviceIndex, 1);
        res.send('Device deleted');
    } else {
        res.status(404).send('Device not found');
    }
});

router.post('/devices/:id/send-command', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { command } = req.body; 
        const deviceId = req.params.id;
        await sendMessageToDevice(deviceId, command); // Use the destructured function
        res.status(200).send(`Command sent to device ${deviceId}`);
    } catch (error) {
        console.error('Error sending command to device:', error);
        res.status(500).send('Failed to send command to device');
    }
});

module.exports = router;


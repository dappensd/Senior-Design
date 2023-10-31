const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');  // for password hashing
const { container } = require('./Azuredb.js');  // Importing the container from Azuredb.js
const jwt = require('jsonwebtoken');
const { jwtMiddleware } = require('./../middlewares.js')

// Registration endpoint
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const { resources: users } = await container.items.query({
            query: "SELECT * from users u WHERE u.email = @email",
            parameters: [{ name: "@email", value: email }]
        }).fetchAll();

        if (users.length > 0) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save user to the database
        const newUser = {
            email,
            password: hashedPassword
        };
        const { resource: createdItem } = await container.items.create(newUser);

        res.status(201).json(createdItem);

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const { resources: users } = await container.items.query({
            query: "SELECT * from users u WHERE u.email = @email",
            parameters: [{ name: "@email", value: email }]
        }).fetchAll();

        if (users.length === 0) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const user = users[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // User verified. Generate JWT.
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});

router.get('/profile', jwtMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        
        // Fetch user data from the database using the user ID
        const { resources: users } = await container.items.query({
            query: "SELECT * from users u WHERE u.id = @id",
            parameters: [{ name: "@id", value: userId }]
        }).fetchAll();

        if (users.length === 0) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const user = users[0];

        // Remove sensitive data
        delete user.password;

        res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;



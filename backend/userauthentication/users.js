const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');  // for password hashing
const { container } = require('./Azuredb.js');  // Importing the container from Azuredb.js
const jwt = require('jsonwebtoken');
const { jwtMiddleware } = require('./../middlewares.js');
const nodemailer = require('nodemailer'); // Import Nodemailer for sending emails
const { check, validationResult } = require('express-validator'); // For validation


// Environment Variables for Nodemailer and JWT
const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;



// Email transporter setup
let transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail
    auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD
    }
});

// Utility function to send emails using the transporter defined above
async function sendPasswordResetEmail(email, resetLink) {
    let info = await transporter.sendMail({
        from: `"StayAware" <${EMAIL_USERNAME}>`, // sender address
        to: email, // list of receivers
        subject: 'Password Reset', // Subject line
        text: `You requested a password reset. Please go to this link to reset your password: ${resetLink}`, // plain text body
        html: `<b>You requested a password reset. Please go to this link to reset your password:</b> <a href="${resetLink}">${resetLink}</a>` // html body
    });

    console.log('Message sent: %s', info.messageId);
}


// Registration endpoint
router.post('/register', [
    // Validation middleware
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
  ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          console.log('Validation errors:', errors.array()); // Log validation errors
          return res.status(400).json({ errors: errors.array() });
      }
  
      const { username, email, password } = req.body;

      console.log('Attempting to register user:', { username, email }); // Log registration attempt
  
      try {
          // Check if user already exists by email
          const { resources: existingUsersByEmail } = await container.items.query({
              query: "SELECT * from c WHERE c.email = @email",
              parameters: [{ name: "@email", value: email }]
          }).fetchAll();

          if (existingUsersByEmail.length > 0) {
              console.log('Email already in use:', email); // Log if email is already in use
              return res.status(400).json({ msg: 'User already exists with this email' });
          }

          // Check if username already exists
          const { resources: existingUsersByUsername } = await container.items.query({
              query: "SELECT * from c WHERE c.username = @username",
              parameters: [{ name: "@username", value: username }]
          }).fetchAll();

          if (existingUsersByUsername.length > 0) {
              console.log('Username already in use:', username); // Log if username is already in use
              return res.status(400).json({ msg: 'Username already in use' });
          }
  
          // Hash the password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
  
          // Save user to the database
          const newUser = {
              username,
              email,
              password: hashedPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null
          };
          const { resource: createdUser } = await container.items.create(newUser);
          console.log('User registered:', createdUser.id); // Log successful registration
  
          res.status(201).json(createdUser);
  
      } catch (error) {
          console.error('Registration error:', error); // Log server error
          res.status(500).json({ msg: 'Server error' });
      }
  });
 
  // Login Endpoint
  router.post('/login', async (req, res) => {
    console.log('Login request body:', req.body);
    const { username, password } = req.body;
    if (!username || !password) {
        console.log('Missing username or password in request:', { username, password });
        return res.status(400).json({ msg: 'Missing username or password' });
      }
    console.log('Login request received for username:', username);

    try {
        // Check if user exists
        console.log('Checking if user exists');
        const { resources: users } = await container.items.query({
            query: "SELECT * from users u WHERE u.username = @username",
            parameters: [{ name: "@username", value: username }]
        }).fetchAll();

        if (users.length === 0) {
            // Logging the result of the user check
            console.log('No user found with this username');
            return res.status(400).json({ msg: 'User not found with this username' });
        }

        const user = users[0];

        // Compare passwords
        console.log('Compare passwords');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch');
            return res.status(400).json({ msg: 'Password is incorrect' });
        }

        // User verified. Generate JWT.
        console.log('Generating JWT for user');
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
                if (err) {
                    console.error('Error generating JWT:', err);
                    throw err;
                }   
                 // Log successful token generation
                 console.log('JWT generated successfully');

                // Set the HTTP-only cookie with the JWT token
                res.cookie('sessionToken', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict', // Helps against CSRF
                    maxAge: 3600000 // 1 hour cookie
                });

                 // Log successful login
                 console.log('User logged in successfully');

                // Send a simple success message
                res.status(200).json({ msg: 'Login successful' });
            }
        );

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ msg: 'Server error' });
    }
});

// Logout Endpoint
router.post('/logout', (req, res) => {
    res.clearCookie('sessionToken');  // Clear the sessionToken cookie
    console.log('User logged out successfully');
    res.status(200).json({ msg: 'Logout successful' });
});

// Password reset request endpoint
router.post('/password-reset-request', [
    check('email').isEmail().withMessage('Enter a valid email address').normalizeEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    try {
        // Generate password reset token
        const resetToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
        const resetLink = `https://placeholder.com/password-reset?token=${resetToken}`; // Will need to change this later on when we configure frontend routes

        // Attempt to find the user by email
        const { resources: users } = await container.items.query({
            query: "SELECT * from c WHERE c.email = @email",
            parameters: [{ name: "@email", value: email }]
        }).fetchAll();

        if (users.length === 1) {
            const user = users[0];
            user.resetPasswordToken = resetToken;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

            await container.item(user.id, user.id).replace(user);

            // Send password reset email
            await sendPasswordResetEmail(email, resetLink);
        }

        // Always return the same message whether the user was found or not to prevent user enumeration
        res.json({ msg: 'If a user with that email exists, a password reset link has been sent.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Endpoint to handle password updates
router.post('/password-reset', [
    check('newPassword').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { token, newPassword } = req.body;

    try {
        // Find the user by the reset token and check if the token hasn't expired
        const { resources: users } = await container.items.query({
            query: "SELECT * from c WHERE c.resetPasswordToken = @token AND c.resetPasswordExpires > @currentTime",
            parameters: [
                { name: "@token", value: token },
                { name: "@currentTime", value: Date.now() }
            ]
        }).fetchAll();

        if (users.length === 0) {
            return res.status(400).json({ msg: 'Password reset token is invalid or has expired.' });
        }

        const user = users[0];

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update the user's password in the database

        // Clears the resetPasswordToken and resetPasswordExpires fields
        user.password = hashedPassword;
        user.resetPasswordToken = undefined; // Clear the reset token
        user.resetPasswordExpires = undefined; // Clear the token expiry

        // Save the updated user document in the database
        await container.item(user.id, user.id).replace(user);

        res.status(200).json({ msg: 'Your password has been updated.' });
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


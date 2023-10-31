require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const deviceRoutes = require('./routes/devices');
const clientId = process.env.AZUREAD_CLIENT_ID;
const clientSecret = process.env.AZUREAD_CLIENT_SECRET;
const callbackUrl = process.env.AZUREAD_CALLBACK_URL;
const tenantId = process.env.AZUREAD_TENANT_ID;
const userRoutes = require('./userauthentication/users');
const { jwtMiddleware } = require('./middlewares.js')

const app = express();

// Middleware to parse the body of the request
app.use(express.json());

app.use(session({ 
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: false 
}));

app.use(passport.initialize());
app.use(passport.session());

require('./utils/passport-setup');
require('crypto').randomBytes(64).toString('hex');

// Routes
app.use(deviceRoutes);
app.use('/', userRoutes);

// Route to start the OAuth process
app.get('/auth/azure',
    passport.authenticate('azuread-openidconnect', { scope: ['openid', 'profile', 'User.Read'] }),
    (req, res) => {
        // This function won't be called as the request is redirected
    });

// Route to handle the Azure AD OAuth response
app.get('/auth/azure/callback', 
    passport.authenticate('azuread-openidconnect', { failureRedirect: '/login' }), 
    (req, res) => {
        if (req.user) {
            res.redirect('/dashboard');
        } else {
            res.redirect('/login?loginError=true');
        }
    });

// Secure endpoint example
app.get('/someSecureEndpoint', jwtMiddleware, (req, res) => {
    // If the middleware didn't throw an error, this route is authenticated
    res.send('This is a secure endpoint!');
});

app.get('/', (req, res) => {
  res.send('Hello World! This is the response from the backend server.');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



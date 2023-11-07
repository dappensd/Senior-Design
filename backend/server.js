// Core and third-party modules
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');


// Routers
const deviceRoutes = require('./routes/devices');
const userRoutes = require('./userauthentication/users');
const authRoutes = require('./routes/authroutes'); 

// Middleware configurations
const { corsMiddleware, jwtMiddleware } = require('./middlewares');

// Utilities
require('./utils/passport-setup');

// Initialization of the app
const app = express();

// Use middlewares
app.use(corsMiddleware);
app.use(express.json());
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false 
  }));
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use('/devices', deviceRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes); 

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



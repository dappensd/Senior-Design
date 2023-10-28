const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
require('./utils/passport-setup');



app.use(session({ secret: 'your_session_secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3001;
const deviceRoutes = require('./routes/devices'); 

// Middleware to parse the body of the request
app.use(express.json());

// Route to handle the Azure AD OAuth response
app.get('/auth/azure/callback', (req, res) => {
    // Logic to handle the authorization code sent by Azure AD
    // This involves sending a request to Azure AD to exchange the code for tokens (id_token, access_token)
    
    // For example:
    // const code = req.query.code;
    // ... send a request to Azure AD with the code
    
    // Then, depending on the app logic, redirect the user or show a response
    res.redirect('/');  // Redirect to home page, or wherever appropriate
  });

// Routes
app.use(deviceRoutes);

app.get('/', (req, res) => {
  res.send('Hello World! This is the response from the backend server.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Route to start the OAuth process
app.get('/auth/azure',
    passport.authenticate('azuread-openidconnect', { scope: ['openid', 'profile', 'User.Read'] }),
    (req, res) => {
        // The request will be redirected to Azure AD for authentication, so this function will not be called.
    });

// Route to handle the Azure AD OAuth response
app.get('/auth/azure/callback', passport.authenticate('azuread-openidconnect', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
});

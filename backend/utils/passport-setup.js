
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

passport.use(new OIDCStrategy({
    // ... strategy setup ...
}));

// Necessary for Passport session support
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    // Here, we would use the user ID to fetch the user from the database or cache
    // For this example, we'll just pass the user object through
    done(null, id);  // passing the whole user object for simplicity
});

module.exports = passport;  // Exporting passport for use in the server file


const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

// Azure AD strategy
passport.use(new OIDCStrategy({
    identityMetadata: `https://login.microsoftonline.com/${process.env.AZUREAD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
    clientID: process.env.AZUREAD_CLIENT_ID,
    clientSecret: process.env.AZUREAD_CLIENT_SECRET,
    responseType: 'code id_token',  // 'code', 'code id_token', 'id_token code', 'id_token' are valid
    responseMode: 'form_post',
    redirectUrl: process.env.AZUREAD_CALLBACK_URL,
    allowHttpForRedirectUrl: true,  // For development only
    validateIssuer: true,
    passReqToCallback: false,
    
    loggingLevel: 'info',  // For development only; for best practices we should change this value to 'error' if this was a production environment
}, function(iss, sub, profile, accessToken, refreshToken, done) {
    // This function is called when the strategy has exchanged the authorization code for tokens.
    // The accessToken and refreshToken can be used to access other resources protected by Azure AD.
    if (!profile.oid) {
        return done(new Error("No OID found in user profile."), null);
    }

    return done(null, profile);
}));

// Necessary for Passport session support
passport.serializeUser(function(user, done) {
    done(null, user.oid);  // Here, we're using the OID in the session.
});

passport.deserializeUser(function(oid, done) {
    // Directly passing the OID.
    done(null, oid);
});

module.exports = passport;  // Exporting passport for use in the server file

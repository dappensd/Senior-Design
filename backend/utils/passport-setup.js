
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

// Configure the Azure AD strategy for use by Passport.
passport.use(new OIDCStrategy({
    identityMetadata: `https://login.microsoftonline.com/${process.env.AZUREAD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
    clientID: process.env.AZUREAD_CLIENT_ID,
    clientSecret: process.env.AZUREAD_CLIENT_SECRET,
    responseType: 'code id_token',  // 'code', 'code id_token', 'id_token code', 'id_token' are valid
    responseMode: 'form_post',
    redirectUrl: process.env.AZUREAD_CALLBACK_URL,  // This should be the same as what's set in the application registration portal
    allowHttpForRedirectUrl: true,  // For development only
    validateIssuer: true,  // if you have a single tenant
    // validateIssuer: false,  // if you have a multitenant application
    // The issuer could be different, depending on the tenant. E.g., for multitenant apps, you shouldn't validate the issuer.
    passReqToCallback: false,
    // Other optional parameters can be set if necessary
    loggingLevel: 'info',  // For development only; use 'error' for production
}, function(iss, sub, profile, accessToken, refreshToken, done) {
    // This function is called when the strategy has exchanged the authorization code for tokens.
    // You can use the profile parameter to get the user's profile information.
    // The accessToken and refreshToken can be used to access other resources protected by Azure AD.
    if (!profile.oid) {
        return done(new Error("No OID found in user profile."), null);
    }

    // Here, you should handle the user profile and tokens as per your application's needs.
    // This could involve creating or finding a user record in your database and merging the token information for that user.
    
    // For simplicity, we're directly passing the profile object. In production, you should handle the profile/tokens as needed.
    return done(null, profile);
}));

// Necessary for Passport session support
passport.serializeUser(function(user, done) {
    done(null, user.oid);  // Here, we're using the OID in the session. You could use another unique property of the user.
});

passport.deserializeUser(function(oid, done) {
    // Here, you would typically find the user by their OID in your database or cache and pass the user object.
    // For simplicity, we're directly passing the OID. In production, you should fetch and pass the actual user object.
    done(null, oid);
});

module.exports = passport;  // Exporting passport for use in the server file

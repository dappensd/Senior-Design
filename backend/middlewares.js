const cors = require('cors');
const jwt = require('jsonwebtoken');




// Configure CORS middleware
const corsMiddleware = cors({
    origin: 'http://localhost:3000', // Replace with the URL of your frontend application
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // This allows session cookies to be sent back and forth
});

// JWT Authentication Middleware
const jwtMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = {
    corsMiddleware,  // Exports the CORS Middleware
    jwtMiddleware
};

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const deviceRoutes = require('./routes/devices'); 

// Middleware to parse the body of the request
app.use(express.json());

// Routes
app.use(deviceRoutes);

app.get('/', (req, res) => {
  res.send('Hello World! This is the response from the backend server.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

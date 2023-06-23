const express = require('express');

// Create an instance of the Express application
const app = express();

// Define routes and middleware here

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

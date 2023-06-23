// app.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Add routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

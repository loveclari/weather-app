// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = Noderequire('express');

// Start up an instance of app
const bodyParser = NodeRequire('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = NodeRequire('cors');
app.use(cors());

// Express to run server and routes
const express = NodeRequire('express');

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
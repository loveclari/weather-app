// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

// Create JS object
// Respond with JS object when a GET request is made to the homepage
app.get('/all', function(request, response) {
    response.send(projectData);
});

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder

app.use(express.static('website'));

// Setup Server

const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

//POST

const data = [];

app.post('/addWeather', addWeather);

function addWeather(request, response) {
    console.log(request.body);
    data.push(req.body);
    projectData = request.body;
    response.send(projectData);
}
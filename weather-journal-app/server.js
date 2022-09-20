// // // Setup empty JS object to act as endpoint for all routes

// let projectData = {};

// // Express to run server and routes
// const express = require('express');

// // Start up an instance of app
// const app = express();

// /* Dependencies */
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// /* Middleware*/

// // Cors for cross origin allowance
// const cors = require('cors');
// const { response } = require('express');
// app.use(cors());

// // Initialize the main project folder
// app.use(express.static('website'));

// // Spin up the server
// const port = 3000;
// const server = app.listen(port, listening);

// // Callback to debug
// function listening() {
//     console.log(`Server running`);
//     console.log(`running on localhost: ${port}`);
// }

// //GET route
// // // Create JS object
// // // Respond with JS object when a GET request is made to the homepage

// app.get('https://happy-weather-app.netlify.app/all', function(req, res) {
//     res.send(projectData);
// });

// //POST route

// app.post('https://happy-weather-app.netlify.app/addweather', function(req, res) {
//     // projectData = {
//     //     temp: req.body.temp,
//     //     date: req.body.date,
//     //     content: req.body.content,
//     // };
//     projectData = req.body;
//     console.log(projectData);
//     res.send(projectData);
// });
// // Setup empty JS object to act as endpoint for all routes

let projectData = {};

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Middleware*/

// Cors for cross origin allowance
const cors = require("cors");
const { response } = require("express");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Spin up the server
const port = 3000;
const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`Server running`);
    console.log(`running on localhost: ${port}`);
}

//GET route
// // Create JS object
// // Respond with JS object when a GET request is made to the homepage

app.get("/all", function (req, res) {
    res.send(projectData);
});

//POST route

app.post("/addweather", function (req, res) {
    // projectData = {
    //     temp: req.body.temp,
    //     date: req.body.date,
    //     content: req.body.content,
    // };
    projectData = req.body;
    console.log(projectData);
    res.send(projectData);
});

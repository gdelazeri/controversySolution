// Requirements.
const express = require('express');
const bodyParser = require("body-parser");

// Instances.
const app = express();
const port = process.env.PORT || 5000;

// Configuration.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next();
});

// Debug options.
app.listen(port, () => console.log(`Listening on port ${port}`));

const MainController = require('./Controllers/mainController');

// Get API status
app.get('/', MainController.online);

// Get all users
app.get('/users', MainController.getUsers);

// Insert controversy.
app.post('/addControversy', MainController.addControversy);

// Get all controversies.
app.get('/getControversy', MainController.getControversies);

// Insert iteration.
app.post('/addIteration', MainController.addIteration);

// Get controversy iterations
app.get('/getIterations/:id_controversia', MainController.getIterations);

// Login.
app.post('/login', MainController.login);
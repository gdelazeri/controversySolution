// Requirements.
const express = require('express');
const bodyParser = require("body-parser");

// Instances.
const app = express();
const port = process.env.PORT_API_SERVER || 5000;

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

// Retrieves the user data.
app.get('/users', MainController.getUsers);

// Insert controversia.
app.post('/addControversy', MainController.addControversy);

// get controversias.
app.get('/getControversy', MainController.getControversies);

// Insert iteração.
app.post('/addIteration', MainController.addIteration);

// get iterações de uma controversia.
app.get('/getIterations/:id_controversia', MainController.getIterations);
// Import dependencies.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Initialize app.
var app = express();

// PORT is either the port provided by Heroku via process.env.PORT or 3000.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Import routes.
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
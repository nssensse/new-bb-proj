const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} );

// Log requests
app.use(morgan('tiny'));

// MongoDB connection
connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true }));

// Set view engine and path to views
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Load routers
app.use('/', require('./server/routes/router'));

// Listen on the provided port or default to 8080
app.listen(process.env.PORT || 8080, () => { 
  console.log('Server is running.');
});
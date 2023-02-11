//Importing the express server
const express = require('express');
const path = require('path');

//Set up the inbuilt express validator for basic validation
const {check, validationResult} = require('express-validator'); 

//Import mongoose library
const mongoose = require('mongoose');

//connect to database
//mongoose.connect('mongodb://127.0.0.1:27017/capstone_conestogahub');

//Define the models


//Create a express variable
var myApp = express();

//Using public folder for static files
myApp.use(express.static(__dirname + '/public_files'));

//Defining view engine and views
myApp.set('view engine', 'ejs');
myApp.set('views', path.join(__dirname, 'views'));

//Set up the body parser
myApp.use(express.urlencoded({extended:false}));

//routes
myApp.get('/', function (req, resp) {
        resp.send('<h1>Welcome to my website ..</h1>'); 
});

//Posts route
myApp.get('/posts', function (req, res) {
        res.render('posts');
});


//assigning the port
myApp.listen(8080);

//website home page
console.log('Open http://localhost:8080/');
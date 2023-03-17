//Importing the express server
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

//Set up the inbuilt express validator for basic validation
const { check, validationResult } = require('express-validator');

//connect to database
connectDB();

//Create a express variable
var myApp = express();

//Using public folder for static files
myApp.use(express.static(__dirname + '/public_files'));

//Defining view engine and views
myApp.set('view engine', 'ejs');
myApp.set('views', path.join(__dirname, 'views'));

//Set up the body parser
myApp.use(express.json({ extended: false }));

//routes
myApp.get('/', function (req, res) {
  res.render('home');
});

myApp.get('/login', function (req, res) {
  res.render('login');
});
myApp.get('/register', function (req, res) {
  res.render('register');
});
myApp.use('/api/users', require('./routes/api/users'));
myApp.use('/api/auth', require('./routes/api/auth'));
myApp.use('/api/profile', require('./routes/api/profile'));
myApp.use('/api/posts', require('./routes/api/post'));
myApp.use('/api/wiki', require('./routes/api/wiki'));
myApp.use('/api/tags', require('./routes/api/tags'));

//Open wiki page
myApp.get('/wiki', function (req, res) {
  res.render('wiki');
});

//Opening the "Create a post"
myApp.get('/post', function (req, res) {
  res.render('createpost');
});

//Creating a post (POST)
myApp.post('/postprocess', function (req, res) {});

//Posts route
myApp.get('/posts', function (req, res) {
  res.render('posts');
});

//assigning the port
myApp.listen(8080);

//website home page
console.log('Open http://127.0.0.1:8080/');

var express = require("express");
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express.Router();

app.use(require("morgan")("combined"));

//Sass
app.use('/css', sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public/css'),
    debug: true,
    outputStyle: 'compressed',
}));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//normal routes
app.get('/', function(req, res){
  res.render('home');
});

//errors
app.use(function(req, res){
  res.status(404).render("error", {
    code: 404, 
    explanation: "The page you are looking for could not be found."
  });
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).render("error", {
    code: 500,
    explanation: "An unknown error occured.",
    error: err
  });
});

module.exports = app;

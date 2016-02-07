var express = require("express");
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express.Router();
var db = require("monk")("localhost:27017/hftl");
var kids = db.get("kidscollection");
var moment = require("moment");

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

app.get('/kids', function(req, res){
  kids.find({current: true},
            {sort: {dob: 1}},
            function(e, kids){
    res.render("kids/index", {title: "Kids", kids: kids, moment: moment});
  });
});

app.get('/kids/:name', function(req, res, next){
  kids.findOne({name: req.params.name},
            function(e, kid){
    res.render("kids/kid", {title: kid.name, kid: kid, moment: moment});
  })
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

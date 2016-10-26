var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');



//define the homepage route
router.get('/', function(req, res) {
 return res.render('homepage/home');
});

 
// define the root walkers route
router.get('/walkers', function(req, res) {
  models.Walker.findAll({})
    .then(function (walkers) {
      if (walkers != null) {
        res.render('walkers/list', {walkers: walkers});
      } else {
        res.send('No Walkers found');
      }
    });
});


// define the root groomers route
router.get('/groomers', function(req, res) {
  models.Groomer.findAll({})
    .then(function (groomers) {
      if (groomers != null) {
        res.render('groomers/list', {groomers: groomers});
      } else {
        res.send('No Groomers found');
      }
    });
});


// define the root users route
router.get('/users', function(req, res) {
  models.Users.findAll({})
    .then(function (users) {
      if (users != null) {
        res.render('users/list', {users: users});
      } else {
        res.send('No Users found');
      }
    });
});


// Process a submitted walkers form
router.post('/walkers', function(req,res) {
  console.log(req.body);
  models.Walker.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }).then(function (walker) {
    res.redirect('/walkers')
  }).catch(function (e) {
    res.render('walkers/new', {errors: e.errors});
    // res.json(e);
  })
});


// Process a submitted groomers form
router.post('/groomers', function(req,res) {
  console.log(req.body);
  models.Groomer.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }).then(function (groomer) {
    res.redirect('/groomers')
  }).catch(function (e) {
    res.render('groomers/new', {errors: e.errors});
    // res.json(e);
  })
});



// Process a submitted users form
router.post('/users', function(req,res) {
  console.log(req.body);
  models.Users.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }).then(function (user) {
    res.redirect('/users')
  }).catch(function (e) {
    res.render('users/new', {errors: e.errors});
    // res.json(e);
  })
});



//Display the  walkers signup Form
router.get('/walkers/new', function (req,res) {
	res.render('walkers/new');
});

//Display the groomers signup Form
router.get('/groomers/new', function (req,res) {
	res.render('groomers/new');
});

//Display the users signup Form
router.get('/users/new', function (req,res) {
	res.render('users/new');
});

//define specific page in website
//router.get('/:slug', function(req, res) {
 // res.send('My pet dog is: ' + req.params.slug);
//});


module.exports = router;
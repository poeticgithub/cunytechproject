var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');



// define the root groomers route
router.get('/', function(req, res) {
  models.Groomers.findAll({})
    .then(function (groomers) {
      if (groomers != null) {
        res.render('groomers/list', {groomers: groomers});
      } else {
        res.send('No Groomers found');
      }
    });
});



// Process a submitted groomers form
router.post('/', function(req,res) {
  console.log(req.body);
  models.Groomers.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    street_number: req.body.street_number,
    street_address: req.body.street_address,
    zip_code: req.body.zip_code,
    phone_number: req.body.phone_number,
    emergency_volunteer: req.body.emergency_volunteer,
    salary: req.body.salary,
    rating: req.body.rating

  }).then(function (groomer) {
    res.redirect('/groomers')
  }).catch(function (e) {
    res.render('groomers/new', {errors: e.errors});
    // res.json(e);
  })
});



//Display the groomers signup Form
router.get('/new', function (req,res) {
	res.render('groomers/new');
});


//define specific page in website
//router.get('/:slug', function(req, res) {
 // res.send('My pet dog is: ' + req.params.slug);
//});

module.exports = router;
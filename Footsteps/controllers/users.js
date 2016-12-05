var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');



// define the root users route
router.get('/', function(req, res) {
  models.Users.findAll({})
    .then(function (users) {
      if (users != null) {
        res.render('users/list', {users: users});
      } else {
        res.send('No Users found');
      }
    });
});


// Process a submitted users form
router.post('/', function(req,res) {
  console.log(req.body);
  models.Users.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    street_number: req.body.street_number,
    street_address: req.body.street_address,
    zip_code: req.body.zip_code,
    phone_number: req.body.phone_number
  }).then((user) => {
      req.login(users, () =>
        res.redirect('/users')
      );
  }).catch(function (e) {
    res.render('users/new', {errors: e.errors});
    // res.json(e);
  })
});



//Display the users signup Form
router.get('/new', function (req,res) {
	res.render('users/new');
});



//render specific page in website
//router.get('/:slug', function(req, res) {
 // res.send('My pet dog is: ' + req.params.slug);
//});

module.exports = router;
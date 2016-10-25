var express = require('express');
var router = express.Router();
var models = require('../models');





// define the homepage route
//router.get('/', function(req, res) {
 // return res.sendFile(path.join(__dirname, 'MainPage.html'));
  

  
// define the root walkers route
router.get('/', function(req, res) {
  models.Walker.findAll({})
    .then(function (walkers) {
      if (walkers != null) {
        res.render('walkers/list', {walkers: walkers});
      } else {
        res.send('No Walkers found');
      }
    });
});


// Process a submitted form
router.post('/', function(req,res) {
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

// Display the Form
router.get('/new', function (req,res) {
  res.render('walkers/new');
});



//define specific page in website
//router.get('/:slug', function(req, res) {
 // res.send('My pet dog is: ' + req.params.slug);
//});


module.exports = router;
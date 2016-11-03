var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');
router.use('/users', require('./users'));
router.use('/groomers', require('./groomers'));
router.use('/walkers', require('./walkers'));


//define the homepage route
router.get('/', function(req, res) {
 return res.render('homepage/home');
});



//define specific page in website
//router.get('/:slug', function(req, res) {
 // res.send('My pet dog is: ' + req.params.slug);
//});


module.exports = router;
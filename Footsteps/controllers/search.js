var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');
var Promise = require("bluebird");



//define the root search route
router.get('/', function (req,res) {
  console.log(req.user);
Promise.all(
  [
    models.Walkers.findAll({where: {zip_code: req.user.zip_code}})
  ]).spread(function(walker) {
    console.log (walker);
    res.render('search/results', {walker: walker});

  });
});


module.exports = router;
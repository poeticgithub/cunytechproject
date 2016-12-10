var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');



//define the root search route
router.get('/', function (req,res) {
  res.render('search');
});


//process a submitted search form
router.post('/', function(req,res) {
console.log(req.body);
  models.Walkers.findAll({
      where: { zip_code: req.body.search },
    }).then(function (user2) {
      res.render('search/results', {user2: user2});
  });
});

module.exports = router;
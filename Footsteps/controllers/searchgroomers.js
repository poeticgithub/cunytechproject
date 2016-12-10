var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');


//define the root search route
router.get('/', function (req,res) {
 console.log(req.user);
  models.Groomers.findAll({
      where: { zip_code: req.user.zip_code },
    }).then(function (groomer) {
      res.render('searchgroomers/results', {groomer: groomer});
  });
});


module.exports = router;
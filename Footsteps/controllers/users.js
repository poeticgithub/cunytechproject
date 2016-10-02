var express = require('express');
var router = express.Router();



// define the homepage route
router.get('/', function(req, res) {
  res.send('<h1>Welcome to Footsteps</h1>');
});


//define specific page in website
router.get('/:slug', function(req, res) {
  res.send('My pet dog is: ' + req.params.slug);
});


module.exports = router;
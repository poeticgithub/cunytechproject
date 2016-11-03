var express = require('express');
var router = express.Router();
var path = require('path');



// define the homepage route
router.get('/', function(req, res) {
  return res.sendFile(path.join(__dirname, 'MainPage.html'));
  });


//define specific page in website
router.get('/:slug', function(req, res) {
  res.send('My pet dog is: ' + req.params.slug);
});


module.exports = router;
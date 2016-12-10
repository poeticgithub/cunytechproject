const express = require('express');
const passport = require('../middlewares/authentication');
var Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', this.index);
    router.get('/loggedin', this.loggedin);
    router.post('/', this.login);

    return router;
  },
  loggedin(req, res) {
    console.log('this should go here only if logged in');
    res.render('homepage/home', {error: req.flash('error')});
  },
  index(req, res) {
    res.render('login', {error: req.flash('error')});
  },

  login(req, res) {
    passport.authenticate('local', {
      
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: true,
    })(req, res);
  },
};

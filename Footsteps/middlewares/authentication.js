const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models').Users;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}


passport.use(new LocalStrategy({
  usernameField: 'email',
  },
  function(email, password, done) {
    console.log(email, password);
    Users.findOne({
      where: { email },
    })
    .then(function(users) {
      if (users) {
        if (passwordsMatch(password, users.password) === false) {
          return done(null, false, { message: 'Incorrect password.' });
        }
      }
      else if (users === null) {
        return done(null, false, { message: 'Incorrect email.' });
      }
	  console.log ('successfully logged in');
    return done(null, users, { message: 'Successfully Logged In!' });
    });
  })
);

//passport.redirectIfLoggedIn = (route) =>
//  (req, res, next) => (req.user ? res.redirect(route) : next());

//passport.redirectIfNotLoggedIn = (route) =>
//  (req, res, next) => (req.user ? next() : res.redirect(route));



module.exports = passport;

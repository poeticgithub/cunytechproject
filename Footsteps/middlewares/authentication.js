const passport = require('passport');

const bcrypt = require('bcrypt-nodejs');

const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models').Users;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}


passport.use(new LocalStrategy({
  usernameField: 'email',
  },
  (email, password, done)  => {
    console.log(email, password);
    Users.findOne({
      where: { email },
    })
    .then((user) => {
      if (user) {
        if (passwordsMatch(password, user.password) === false) {
          return done(null, false, { message: 'Incorrect password.' });
        }
      }
      else if (user == null) {
        return done(null, false, { message: 'Incorrect email.' });
      }
	  console.log ('successfully logged in');
    return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id).then((user) => {
    if (user == null) {
      return done(null, false);
    }

    return done(null, user);
  });
});

function isLoggedIn(req,res,next) {
   if (req.isAuthenticated())
     return next();
 res.redirect('/login/loggedin');
 }

passport.redirectIfLoggedIn = (route) =>
 (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
 (req, res, next) => (req.user ? next() : res.redirect(route));


module.exports = passport;

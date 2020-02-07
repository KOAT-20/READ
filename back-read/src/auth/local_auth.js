const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users.models.js');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user.id);
});

passport.use('signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, async (req, email, password, done) => {
  const newUser = new User();
  newUser.email = email;
  newUser.password = newUser.encrypPass(password);
  await newUser.save();
  done(null, newUser);
}));

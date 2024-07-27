const passport = require('passport');
const User = require('../models/userModel');
require('./googleStrategy');
require('./facebookStrategy');

// Serializar e desserializar usuário
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

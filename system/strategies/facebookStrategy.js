const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/userModel');
const { facebook } = require('../config/config');

passport.use(
  new FacebookStrategy(
    {
      clientID: facebook.clientID,
      clientSecret: facebook.clientSecret,
      callbackURL: '/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ where: { facebookId: profile.id } }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          User.create({ facebookId: profile.id }).then((user) => done(null, user));
        }
      });
    }
  )
);

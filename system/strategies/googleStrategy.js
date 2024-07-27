const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');
const { google } = require('../config/config');

passport.use(
  new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ where: { googleId: profile.id } }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
          }).then((user) => done(null, user));
        }
      });
    }
  )
);

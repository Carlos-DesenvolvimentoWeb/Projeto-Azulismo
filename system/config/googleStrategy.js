const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/api/auth/google/callback',
  session: false,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const token = jwt.sign(
      { username: profile.displayName, email: profile.emails[0].value },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return done(null, { token });
  } catch (error) {
    return done(error, null);
  }
}));

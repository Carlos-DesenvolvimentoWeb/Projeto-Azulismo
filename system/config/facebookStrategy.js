const { Strategy: FacebookStrategy } = require('passport-facebook');
const passport = require('passport');
const jwt = require('jsonwebtoken');

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: '/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'emails'],
  session: false,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const token = jwt.sign(
      { username: profile.displayName, email: profile.emails ? profile.emails[0].value : null },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return done(null, { token });
  } catch (error) {
    return done(error, null);
  }
}));

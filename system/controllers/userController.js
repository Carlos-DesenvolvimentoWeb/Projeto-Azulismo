const passport = require('passport');

module.exports = {
  login: (req, res) => {
    res.render('login');
  },

  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  },

  googleAuth: passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),

  googleCallback: passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  }),

  facebookAuth: passport.authenticate('facebook'),

  facebookCallback: passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  }),
};

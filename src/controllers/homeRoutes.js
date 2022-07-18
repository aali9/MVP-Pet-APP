const router = require('express').Router();
const { Pet, User } = require('../models');

// TODO: Import the custom middleware const withAuth = require('../middlewares/auth');

// get homepage
router.get('/', async (req, res) => {
  res.render('homepage', { logged_in: req.session.logged_in });
});

// login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

// team route
router.get('/team', (req, res) => {
  res.render('team');
});

// about route
router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;

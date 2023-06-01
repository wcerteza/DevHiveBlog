var express = require('express')
var router = express.Router()
const passport = require('passport')
const homeCtrl = require('../controllers/homes')
/* GET home page. */
router.get('/', homeCtrl.banana)

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

module.exports = router

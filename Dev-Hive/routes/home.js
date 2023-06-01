const express = require('express')
const router = express.Router()
const homeCtrl = require('../controllers/homes')

router.get('/', homeCtrl.banana)

module.exports = router

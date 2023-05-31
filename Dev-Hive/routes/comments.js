const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')

router.post('/posts/:id/comments', commentsCtrl.create)

router.delete('/comments/:id', commentsCtrl.delete)

module.exports = router

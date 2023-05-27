const Post = require('../models/post')

const newPost = (req, res) => {
  res.render('posts/new', { title: 'Post', errorMsg: '' })
}

const create = async (req, res) => {
  try {
    await Post.create(req.body)
    res.redirect('/posts/new')
  } catch (err) {
    res.render('posts/new', { errorMsg: '' })
  }
}

module.exports = {
  new: newPost,
  create
}

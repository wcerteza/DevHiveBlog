const Post = require('../models/post')

const index = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: 'desc' })
  res.render('posts/index', { posts })
}

const newPost = (req, res) => {
  res.render('posts/new', { title: 'Post', errorMsg: '' })
}

const create = async (req, res) => {
  try {
    await Post.create(req.body)
    res.redirect('/posts')
  } catch (err) {
    res.render('posts/new', { errorMsg: '' })
  }
}

module.exports = {
  new: newPost,
  create,
  index
}

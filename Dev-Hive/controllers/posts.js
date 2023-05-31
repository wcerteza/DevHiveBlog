const Post = require('../models/post')

const index = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: 'desc' })
  res.render('posts/index', { title: 'All Posts', posts })
}

async function show(req, res) {
  const post = await Post.findById(req.params.id)
  res.render('posts/show', { title: 'Show', post })
}

const newPost = (req, res) => {
  res.render('posts/new', { title: 'Post', errorMsg: '' })
}

const create = async (req, res) => {
  req.body.author = req.user._id
  req.body.usersName = req.user.name
  req.body.usersAvatar = req.user.avatar
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
  index,
  show
}

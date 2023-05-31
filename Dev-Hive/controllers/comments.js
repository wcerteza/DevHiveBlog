const Post = require('../models/post')

const create = async (req, res) => {
  console.log(req.user)
  const post = await Post.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  post.comments.push(req.body)
  try {
    await post.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/posts/${post._id}`)
}

module.exports = {
  create
}

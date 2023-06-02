const Post = require('../models/post')

const create = async (req, res) => {
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

const deleteComment = (req, res, next) => {
  Post.findOne({
    'comments._id': req.params.id,
    'comments.user': req.user._id
  }).then((post) => {
    if (!post) return res.redirect('/posts')
    post.comments.remove(req.params.id)
    post
      .save()
      .then(() => {
        res.redirect(`/posts/${post._id}`)
      })
      .catch((err) => {
        return next(err)
      })
  })
}

module.exports = {
  create,
  delete: deleteComment
}

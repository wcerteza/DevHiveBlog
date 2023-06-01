const Post = require('../models/post')

const render = async (req, res) => {
  const allPosts = await Post.find({})
  const postCount = allPosts.length
  const newestPost = allPosts[postCount - 1]
  let mostPopularPost = {}
  allPosts.forEach((post, idx) => {
    if (idx === 0) {
      mostPopularPost = post
    } else if (post.comments.length > mostPopularPost.comments.length) {
      mostPopularPost = post
    }
  })
  res.render('index', { title: 'Home', postCount, newestPost, mostPopularPost })
}

module.exports = {
  render
}

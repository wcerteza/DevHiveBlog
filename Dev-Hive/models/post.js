const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
})

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: {
    name: String,
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  usersName: String,
  comments: [commentSchema]
})

module.exports = mongoose.model('Post', postSchema)

// controllers/post.js
const Post = require("../models/Post");

const createPost = async (req, res) => {
  const { text } = req.body;
  const post = await Post.create({ text, author: req.userId });
  res.status(201).json(post);
};

const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "name").sort({ createdAt: -1 });
  res.json(posts);
};

const getUserPosts = async (req, res) => {
  const posts = await Post.find({ author: req.params.userId }).populate("author", "name");
  res.json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
  getUserPosts,
};

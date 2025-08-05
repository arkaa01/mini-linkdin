// routes/post.js
const express = require("express");
const { createPost, getAllPosts, getUserPosts } = require("../controllers/post");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", getAllPosts);
router.get("/:userId", getUserPosts);

module.exports = router;

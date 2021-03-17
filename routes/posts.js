const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Routes
// See all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// View a post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a post
router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    definition: req.body.definition
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.remove({_id: req.params.id});
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name, definition: req.body.definition } }
    );
    res.json(updatedPost);
  } catch (err) {
     res.json( { message: err });
  }
});

module.exports = router;




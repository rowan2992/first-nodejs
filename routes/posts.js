const express = require("express");
const Post = require("../models/Post");
const router = express.Router();
// const app = express();

// Middlewares
// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());

// Routes
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: "poop" });
  }
});


module.exports = router;




const express = require("express");
const Post = require("../models/Post");
const router = express.Router();
// const app = express();

// // // Middlewares
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// Routes
router.get('/', (req, res) => {
  res.send("we are on posts");
});


router.post('/specific', (req, res) => {
  console.log("LOG TO CONSOLE");
  res.status(201).send({"name": "barry"});
});


module.exports = router;




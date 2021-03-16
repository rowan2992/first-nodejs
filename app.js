const express = require("express");
const app = express();
const connectDB = require("./connectionDB.js");

const Post = require("./models/Post");


// Import Routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Routes
app.get("/", async (req, res) => {
  res.send("HOME");
})

// Connect to DB
connectDB();

app.listen(3000, () => console.log("SERVER HAS STARTED!"));



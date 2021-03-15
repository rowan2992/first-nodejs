const express = require("express");
const app = express();
const connectDB = require("./connectionDB.js");

const Post = require("./models/Post");


// Import Routes
// const postsRoute = require("./routes/posts");

// app.use("/posts", postsRoute);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
})

app.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
    // res.status(201).send(req.body);
  } catch (err) {
    res.json({ message: err });
  }
});

// Connect to DB
connectDB();

app.listen(3000, () => console.log("SERVER HAS STARTED!"));













// MONGODB_URI = "mongodb+srv://jaguar:testtest123@cluster0.irdcv.mongodb.net/test?retryWrites=true&w=majority";

// mongoose.connect(MONGODB_URI || "mongodb://localhost/", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jaguar:<password>@cluster0.irdcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// mongoose.connection.on("connected", () => {
//   console.log("The DB is connected!!!!!");
// });
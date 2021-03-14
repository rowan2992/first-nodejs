const express = require("express");
const app = express();
const connectDB = require("./connectionDB.js");

const Post = require("./models/Post");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("we are on home");
})

app.post("/", (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    descripton: req.body.description
  });

  post.save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({ message: err });
      })
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
const express = require("express");

const app = express();


// Middlewares
app.use("/posts", () => {
  console.log("the middleware has just been activated");
})

// Routes
app.get("/", (req, res) => {
  res.send("we are on home");
})

app.get("/posts", (req, res) => {
  res.send("we are on posts");
})

app.listen(3000);
const mongoose = require("mongoose");
require("dotenv/config");

// const URI = "mongodb+srv://tiger:jungle123@cluster0.ahuey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const URI = process.env.DB_CONNECTION;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database connected.");
};

module.exports = connectDB;
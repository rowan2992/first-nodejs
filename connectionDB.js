const mongoose = require("mongoose");
require('dotenv').config()

const URI = process.env.DB_CONNECTION;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database connected.");
};

module.exports = connectDB;

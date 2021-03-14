const mongoose = require("mongoose");

const URI = "mongodb+srv://tiger:jungle123@cluster0.ahuey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("DB is connected . . . !!!");
};

module.exports = connectDB;
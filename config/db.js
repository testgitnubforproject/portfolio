require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hty68.mongodb.net/portfiliouser?retryWrites=true&w=majority`);

    console.log("database connected");
  } catch(error) {
    console.log(error.message);
  }
};

module.exports = connectDB;

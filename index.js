const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

const dotenv = require("dotenv");




app.use(cors());
app.use(express.json());



const connectDB = require("./config/db")
dotenv.config()

const userRoutes = require("./routes/userRoutes")

connectDB()
app.use("/api",userRoutes)




app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`Server Running @${port}`);
});

const mongoose = require("mongoose");
const  User  = require("../models/userModel")

// post user 

// const postUser = async(req,res)=>{
//     try {
//         const user = new User(req.body)
//         const result = await user.save()

//         res.status(200).json({
//             status: "success",
//             message: "user success",
//           });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

const postUser = async (req, res) => {
  try {
    const { ip, city, state, country, latitude, longitude } = req.body;
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 2 * 60 * 1000); // 5 minutes ago
    const existingUser = await User.findOne({
      ip,
      city,
      state,
      country,
      latitude,
      longitude,
      createdAt: { $gte: fiveMinutesAgo }
    });
    if (existingUser) {
      res.status(200).json({
        status: "success",
        message: "user already exists",
        data: existingUser
      });
    } else {
      const user = new User({ ip, city, state, country, latitude, longitude, createdAt: now });
      const result = await user.save();
      res.status(200).json({
        status: "success",
        message: "user saved successfully",
        data: result
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
  


const getUser = async(req,res) => {
    try {
        const user = await User.find({})

        res.status(200).json({
            status: "success",
            message: "user data get success",
            data: user
          });
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}


module.exports = {
    postUser,
    getUser
}
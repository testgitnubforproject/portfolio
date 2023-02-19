const mongoose = require("mongoose")

const {Schema} = mongoose;


const userSchema = new Schema({

country:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
ip:{
    type:String,
    required:true
},
latitude:{
    type:String,
    required:true
},
longitude:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
}





},{ timestamps:true})


const User = mongoose.model("user", userSchema)

module.exports = User
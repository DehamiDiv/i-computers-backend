import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
       type : String,
       required : true
    },
    lastName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
        enum : ["admin","customer"]   //constant value can be have tw or more options
    },
    isBlocked : {
        type : Boolean,
        default : false,
        required : true
    },
    isEmailVerified :{
         type : Boolean,
         default : false,
        required : true
    },
    image : {
        type : String,  //save as the url
        default : "/images/default-profile.png",
        required : true
    }
})

const User = mongoose.model("User",userSchema)

export default User;
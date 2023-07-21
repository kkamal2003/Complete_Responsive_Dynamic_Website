const mongoose = require("mongoose");
const validator = require("validator");

const userschema = mongoose.Schema({
    name :{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone :{
        type:Number,
        required:true,
        min:10
    },
    message :{
        type:String,
        required:true,
        minLength:3
    },
})

const User = mongoose.model("User",userschema);
module.exports = User;

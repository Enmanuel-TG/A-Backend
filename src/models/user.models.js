import mongoose from "mongoose";

mongoose.Schema({
    username:{
        type: String,
        require: true,
        trim: true,
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        trim: true,
    }
})
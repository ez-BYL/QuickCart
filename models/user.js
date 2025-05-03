import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {type:String, required:true},
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    image: {type:String, required:true},
    cartItems: {type:Object, default:{}}
}, {minimize:false})

const User = mongoose.models.user || mongoose.model('user', userschema)

export default User
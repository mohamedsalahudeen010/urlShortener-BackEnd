import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const createToken=(id)=>{
    const token=jwt.sign({id},process.env.SECRET_CODE)
    return token
}


const User=mongoose.model("users",userSchema)

export {User,createToken}
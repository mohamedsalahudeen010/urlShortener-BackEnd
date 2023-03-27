import express from "express"
const route=express.Router()
import { User } from "../model/user.js"


route.get("/",async(req,res)=>{
try {
    const user= await User.find()
    if(!user){
       return res.status(404).json({message:"Please Sign up"})
    } 
    return res.status(200).json(user)
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"})
}
    
    
})


export const getRoute=route;


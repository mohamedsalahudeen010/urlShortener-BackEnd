import express from "express"
import bcrypt from "bcrypt"
import {User} from "../model/user.js"
import { createToken } from "../model/user.js";


const router=express.Router();


router.post("/",async(req,res)=>{
    try {
        
        const user= await User.findOne({email:req.body.email});
        
        if(!user){
            return res.status(404).json({message:"Invalid credentials Email"})

        }

        const password=bcrypt.compare(req.body.password,user.password)

        if(!password){
            return res.status(404).json({message:"Invalid credentials password"})

        }

        const token=createToken(user._id)
        return  res.status(200).json({message:"logged in successfully",
        token:token,name:user.name})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error"})
    }

})


 export const loginRouter=router

 
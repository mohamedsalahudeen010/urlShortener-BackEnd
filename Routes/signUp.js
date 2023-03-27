import express from "express"
import { User } from "../model/user.js"
import bcrypt from "bcrypt"
const router=express.Router()

router.post("/",async(req,res)=>{
    try {     
        let user= await User.findOne({email:req.body.email})
    
        if(user){
            return  res.status(409).json({message:"Email Already Exist"})
        }   
       const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(req.body.password,salt)
    
        user=await new User({
            name:req.body.name,
            email:req.body.email,
            password:hash,
        }).save()
    
        return res.status(200).json({mesage:"Signup completed successfully",user})
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({mesage:"Internal Server Error"})
    }
  
   })



   export const userRouter=router









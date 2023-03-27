import jwt, { verify } from "jsonwebtoken"
import {User} from "../model/user.js"


export const isSignedIn=async (req,res,next)=>{

    let token;
    if(req.headers){
        try {
            token=req.headers["x-auth-token"];

            const decode=jwt.verify(token,process.env.SECRET_CODE)

            req.user=await User.findById(decode.id).select("-password")
            
            next()
          
        } catch (error) {
            console.log(error)
            return res.status(401).json({message: "Invalid Authorization"})
        }
    }
    if(!req.headers){
        if(!token) return res.status(400).json({message:"Access denied"})
    }
}
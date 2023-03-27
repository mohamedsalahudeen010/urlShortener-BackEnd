import express from "express"
import { UrlData } from "../model/url.js";

const router=express.Router()

router.get("/:urlId",async(req,res)=>{
    try {
        const id=req.params.urlId;
        console.log(id)
        const data=await UrlData.findOne({shortUrl:`http://localhost:2005/urlpage/${id}`}) 
      
        if(data){
                res.redirect(data.longUrl)  
        }
        else{
            res.status(400).json({message:"Invalid Url"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})


export const urlPageRouter=router

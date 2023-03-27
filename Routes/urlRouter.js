import express from "express"
const router=express.Router();
import { UrlData } from "../model/url.js";


router.post("/",async (req,res)=>{
    try {
        let urlData=await UrlData.findOne({longUrl:req.body.longUrl})
        if(urlData){
           return res.status(409).json({message:"Url entered is already exist"})
        }
        let url=await UrlData.create({
            longUrl:req.body.longUrl,
            shortUrl:req.body.shortUrl,
            
        })
        if(!url){return res.status(400).json({message:"error in sending content"})}
        return res.status(200).json({message:"content sent successfully",url})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server Error"})
    }
})


router.get("/",async (req,res)=>{
    try {
        let url=await UrlData.find()
        if(!url){return res.status(400).json({message:"Url is not available"})}
        return res.status(200).json(url)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server Error"})
    }
})



// router.put("/:urlId",async(req,res)=>{
//     try {
//         const id=req.params.urlId;
//         console.log(id)
//         const updatedData=await UrlData.findAndUpdata({shortUrl:`http://localhost:2005/url/${id}`},{$inc:{clicks:1}})
//     if(updatedData){
//         res.status(200).json({message:"updated Successfully"})
//     }
//     } catch (error) {
//         res.status(500).json({message:"Internal Server Error"})
//     }
// })

router.delete("/:urlId",async(req,res)=>{
    try {
        const id=req.params.urlId;
        const deleteData=await UrlData.deleteOne({_id:id})
        if(deleteData){
           return res.status(200).json(deleteData)
        }
    } catch (error) {
        console.log(error)
    }
})

export const urlRouter=router
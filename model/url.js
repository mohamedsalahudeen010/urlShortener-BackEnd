import mongoose from "mongoose";


const urlSchema=new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        default:0
    }
})


const UrlData=mongoose.model("urlData",urlSchema)

export {UrlData}
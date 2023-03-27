
import mongoose from "mongoose"
export const dbConnection=()=>{
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }

    try {
        mongoose.connect(process.env.MONGO_URL,params)
        console.log("DB connected Via Mongoose")
    } catch (error) {
        console.log(error)
        console.log("mongodb connection error")
    }
}


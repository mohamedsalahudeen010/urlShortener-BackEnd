import express, { json } from "express"
const app=express()
import dotenv from "dotenv"
dotenv.config()
import {dbConnection} from "./DB.js"
dbConnection()

import cors from "cors"
app.use(cors());
import { userRouter } from "./Routes/signUp.js"
import {loginRouter} from "./Routes/login.js"

import { getRoute } from "./Routes/getUsers.js"
import { urlRouter } from "./Routes/urlRouter.js"
import { isSignedIn } from "./controllers/authorization.js"
import { urlPageRouter } from "./Routes/urlPageRouter.js"





const PORT=process.env.PORT
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Hello I am Created in port ${PORT}`)
})

app.get("/",async (req,res)=>{
    res.send("Hello I am Hoisted")
})

app.use("/signup",userRouter)
app.use("/login",loginRouter)
app.use("/users",getRoute)
app.use("/urlpage",urlPageRouter)
app.use("/url",isSignedIn,urlRouter)

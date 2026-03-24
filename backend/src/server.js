import express from "express";
import { ENV } from "./lib/env.js";
import { connectDb } from "./lib/db.js";
const app = express()

app.get("/",(req,res)=>{
    res.status(200).json({msg : "succes "})

})

app.listen( ENV.PORT , ()=>{ 
    console.log("server is working ")
    connectDb()

})
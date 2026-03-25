import express from "express";
import { ENV } from "./lib/env.js";
import { connectDb } from "./lib/db.js";
import cors from "cors"
import {serve} from "inngest/express"
import { inngest } from "./lib/inngest.js";
const app = express()

app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use("/api/inngest",serve({client:inngest , functions}))

app.get("/",(req,res)=>{
    res.status(200).json({msg : "succes "})

})

app.listen( ENV.PORT , ()=>{ 
    console.log("server is working ")
    connectDb()

})
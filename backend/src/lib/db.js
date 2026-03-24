import { ENV } from "./env.js";
import mongoose from "mongoose"

export const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("db connected ")

    }catch(er){
        console.log("db not connected " , er)

    }
}
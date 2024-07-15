import mongoose from "mongoose";
import { env } from 'node:process';




const connectDB = async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("connection established");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/MelodyMap`)
}

export default connectDB;
import { error } from "console";
import mongoose from "mongoose";
import { env } from "process";
let isConnected = false;
// all the mongoose methods are asynchronous
const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("DB IS ALREADY CONNECTED. PLEASE CHECK.");
        return;
    }
    // connect to the DB
    try{
        await mongoose.connect(process.env.MONGODB_URI!);
        isConnected=true;
    }catch(err){
        console.log("ERror==========",err);
    }

}

export default connectToDB;
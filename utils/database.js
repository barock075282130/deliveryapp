import mongoose from "mongoose";

let isConnected = false;

export default async function connectDB(){
    mongoose.set('strictQuery',true);

    if(isConnected){
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "deliveryapp",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
    } catch (error) {
        console.log("connect failed");
    }
}
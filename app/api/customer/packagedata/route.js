import Package from "@models/package";
import connectDB from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const { 
        username,
        userPhone,
        receiverName,
        receiverPhone,
        title,
        receiveFrom,
        sendTo,
        packageInfo,
        packageUser,
    } = await req.json();
    try {
        await connectDB();
        const data = new Package({
            username,
            userPhone,
            receiverName,
            receiverPhone,
            title,
            receiveFrom,
            sendTo,
            packageInfo,
            packageUser: packageUser,
        });
        await data.save();
        return new Response("Update Success", { status: 200 });
    } catch (error) {
        return new Response("Update Failed", { status: 500 });
    }
}

export const GET = async(req) => {
    try {
        await connectDB();
        const packageData = await Package.find();
        if(!packageData) return new Response("No Package", { status: 404 });
        return NextResponse.json(packageData, { status: 200 })
    } catch (error) {
        return new Response("Get Data Failed", { status: 500 });
    }
}
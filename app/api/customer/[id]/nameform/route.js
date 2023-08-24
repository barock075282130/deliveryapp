import User from "@models/user";
import connectDB from "@utils/database";
import { NextResponse } from "next/server";

export const PATCH = async(req,{ params }) => {
    const { username } = await req.json();
    try {
        await connectDB();
        const userInfo = await User.findById(params.id);
        if(!userInfo) return new Response('No user found',{ status: 404 });
        userInfo.username = username;
        await userInfo.save();
        return new Response("Update Success", { status: 200 });
    } catch (error) {
        return NextResponse.json(error,{ status: 500 })
    }
}
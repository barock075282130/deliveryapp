import User from "@models/user";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req, { params }) => {
    try {
        await connectDB();
        
        const getUserInfo = await User.findById(params.id)
        const data = {
            id: getUserInfo._id,
            name: getUserInfo.username,
            email: getUserInfo.email
        }
        if(!getUserInfo) return new Response('Not found!!',{ status: 404 })
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return new Response('fetch error',{ status: 500 })
    }
}
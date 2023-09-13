import User from "@models/user";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req,{ params }) => {
    try {
        await connectDB();

        const res = await User.findById(params.id)
        const data = {
            id: res._id,
            username: res.username,
            address: res.address,
            province: res.province,
            postcode: res.postcode,
            phone: res.phone,
        }
        if (!res) return new Response("User not found", { status: 404 });
        return NextResponse.json(data,{ status: 200 })
    } catch (error) {
        return new Response('error', { status: 500 })
    }
}
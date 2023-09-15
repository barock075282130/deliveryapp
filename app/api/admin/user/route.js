import User from "@models/user";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req) => {
    try {
        await connectDB();

        const getUserData = await User.find().where({ permission: { $ne: 'admin' } })
        if(!getUserData) return new Response('no data found!', { status: 404 })
        return NextResponse.json(getUserData, { status: 200 });
    } catch (error) {
        return new Response('fetch failed',{ status: 500 })
    }
}


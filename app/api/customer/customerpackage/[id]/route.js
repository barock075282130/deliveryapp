import Package from "@models/package";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req, { params }) => {
    try {
        await connectDB();

        const resPackage = await Package.find({ packageUser: params.id });
        if(!resPackage) return new Response('No Package Found!',{ status: 404 })
        return NextResponse.json(resPackage,{ status: 200 })
    } catch (error) {
        return new Response("fetch data error!", { status: 500 });
    }
}
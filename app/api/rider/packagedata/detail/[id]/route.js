import Package from "@models/package";
import connectDB from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async(req, { params }) => {
    try {
        await connectDB();

        const res = await Package.findById(params.id)
        if(!res) return new Response('Package not found!!', { status: 404 })
        const data = {
          username: res.username,
          receiveFrom: res.receiveFrom,
          sendTo: res.sendTo,
          userPhone: res.userPhone,
          receiverName: res.receiverName,
          receiverPhone: res.receiverPhone,
        };
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return new Response("Fetch data error", { status: 500 });
    }
}
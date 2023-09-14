import Package from "@models/package";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req,{params}) => {
    try {
        await connectDB();

        const allPackage = await Package.find({ packageUser: params.id})
        const waitStatus = await Package.find({ packageUser: params.id}).where({ hidePackage: 'รอ' })
        const ongoingStatus = await Package.find({ packageUser: params.id}).where({ hidePackage: 'รับ' })
        const Done = await Package.find({ packageUser: params.id}).where({ hidePackage: 'เสร็จ' })
        if(!allPackage) return new Response('No package',{ status: 404 })
        const data = {
          all: allPackage.length,
          wait: waitStatus.length,
          going: ongoingStatus.length,
          done: Done.length,
        };
        return NextResponse.json(data,{ status: 200 })
    } catch (error) {
        return new Response("fetch error", { status: 500 });
    }
}
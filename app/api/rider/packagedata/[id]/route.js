import Package from "@models/package";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req, { params }) => {
    try {
        await connectDB();

        const riderPackage = await Package.find({ rider: params.id }).where({ hidePackage: 'รับ' });
        if (!riderPackage) return new Response("Package not found!!", { status: 404 });
        return NextResponse.json(riderPackage, { status: 200 });
    } catch (error) {
        return new Response("Fetch data error", { status: 500 });
    }
}

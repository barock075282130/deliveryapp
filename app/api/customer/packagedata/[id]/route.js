import Package from "@models/package";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req, { params }) => {
    try {
        await connectDB();

        const getpackage = await Package.findById(params.id)
        if(!getpackage) return new Response('No package data', { status: 404 })
        return NextResponse.json(getpackage,{ status: 200 })
    } catch (error) {
        return new Response('get data failed', { status: 500 })
    }
}

export const PATCH = async(req,{ params }) => {
    const { username, receiveFrom, sendTo, packageInfo } = await req.json();
    try {
        await connectDB();

        const existPackage = await Package.findById(params.id);
        if(!existPackage) return new Response('can not find package data',{ status: 404 })
        existPackage.username = username;
        existPackage.receiveFrom = receiveFrom;
        existPackage.sendTo = sendTo;
        existPackage.packageInfo = packageInfo;
        await existPackage.save();
        return new Response('update data success',{ status: 200 })
    } catch (error) {
        return new Response('error update failed',{ status: 500 })
    }
}
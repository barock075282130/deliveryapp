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
    const {
      username,
      userPhone,
      receiverName,
      receiverPhone,
      title,
      receiveFrom,
      sendTo,
      packageInfo,
    } = await req.json();
    try {
        await connectDB();

        const existPackage = await Package.findById(params.id);
        if(!existPackage) return new Response('can not find package data',{ status: 404 })
        existPackage.username = username;
        existPackage.title = title;
        existPackage.receiveFrom = receiveFrom;
        existPackage.sendTo = sendTo;
        existPackage.packageInfo = packageInfo;
        existPackage.userPhone = userPhone;
        existPackage.receiverName = receiverName;
        existPackage.receiverPhone = receiverPhone;
        await existPackage.save();
        return new Response('update data success',{ status: 200 })
    } catch (error) {
        return new Response('error update failed',{ status: 500 })
    }
}

export const DELETE = async(req,{ params }) => {
    try {
        await connectDB();

        const deleteData = await Package.findByIdAndRemove(params.id)
        if(!deleteData) return new Response('data not found', { status: 404 })
        return new Response("delete success", { status: 200 });
    } catch (error) {
        return new Response("delete failed", { status: 500 });
    }
}
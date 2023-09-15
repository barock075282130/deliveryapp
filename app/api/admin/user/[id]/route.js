import User from "@models/user";
import connectDB from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async(req, { params }) => {
    try {
        await connectDB();

        const getdata = await User.findById(params.id)
        if(!getdata) return new Response('user not found',{ status: 404 })
        const data = {
            username: getdata.username,
            role: getdata.role,
        }
        return NextResponse.json(data,{ status: 200 })
    } catch (error) {
        return new Response('error',{ status: 500 })
    }
}

export const PATCH = async (req,{ params }) => {
  const { role } = await req.json();
  try {
      await connectDB();

      const getUser = await User.findById(params.id);
      if(!getUser) return new Response('user not found',{ status: 404 })
      getUser.role = role;
      await getUser.save();
      return new Response('update success',{ status: 200 })
  } catch (error) {
      return new Response('update error',{ status: 500 })
  }
};
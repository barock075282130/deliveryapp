import Package from "@models/package";
import connectDB from "@utils/database"

export const PATCH = async(req) => {
  const { packageId, hidePackage, riderId } = await req.json();
  try {
    await connectDB();

    const data = await Package.findById(packageId)
    if (!data) return new Response("Package Not Found", { status: 404 });
    data.hidePackage = hidePackage;
    data.rider = riderId;
    await data.save();
    return new Response('update succesfully',{ status: 200 })
  } catch (error) {
    return new Response("cant update package", { status: 500 });
  }
}
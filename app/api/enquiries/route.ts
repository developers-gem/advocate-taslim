import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const enquiry = await Enquiry.create(body);

    return NextResponse.json({
      success: true,
      enquiry,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  await connectDB();

  const enquiries = await Enquiry.find()
    .sort({ createdAt: -1 });

  return NextResponse.json(enquiries);
}
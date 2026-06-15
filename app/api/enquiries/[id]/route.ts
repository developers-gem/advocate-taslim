import { NextRequest, NextResponse } from "next/server";

import Enquiry from "@/models/Enquiry";
import { connectDB } from "@/lib/mongodb";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await params;

    const enquiry =
      await Enquiry.findById(id);

    if (!enquiry) {
      return NextResponse.json(
        {
          message:
            "Enquiry not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      enquiry
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await params;

    const enquiry =
      await Enquiry.findByIdAndDelete(
        id
      );

    if (!enquiry) {
      return NextResponse.json(
        {
          message:
            "Enquiry not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
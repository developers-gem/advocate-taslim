import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();

  const { username, password } = body;

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    {
      username,
      role: "admin",
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    }
  );

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set(
    "admin-token",
    token,
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
      path: "/",
      maxAge:
        60 * 60 * 24 * 7,
    }
  );

  return response;
}
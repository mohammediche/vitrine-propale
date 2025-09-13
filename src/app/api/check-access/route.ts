import { checkAccess } from "@/services/back/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, articleId } = await req.json();

    if (!email || !articleId) {
      return NextResponse.json({ access: false, error: "Missing params" }, { status: 400 });
    }

    const hasAccess = await checkAccess({ email, articleId });

    return NextResponse.json({ access: hasAccess });
  } catch (err: unknown) {
    console.error("check-access error:", err);
    return NextResponse.json({ access: false, error: "Server error" }, { status: 500 });
  }
}

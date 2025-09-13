import { createCheckoutSession } from "@/services/back/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, articleId, slug } = await req.json();

    if (!email || !articleId) {
      return NextResponse.json({ error: "Missing params" }, { status: 400 });
    }

    const session = await createCheckoutSession({email, articleId, slug});

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("create-checkout-session error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
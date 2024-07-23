import { NextResponse } from "next/server";
import { Resend } from "resend";

import AcceptEmail from "@/email/AcceptEmail";
import DeclineEmail from "@/email/DeclineEmail";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
const fromConfig =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_RESEND_GLOBAL_DOMAIN
    : process.env.NEXT_RESEND_LOCAL_DOMAIN;

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.email && !body.type) {
    return NextResponse.json({ error: "Email failed to send!" });
  }

  try {
    await resend.emails.send({
      from: fromConfig as string,
      to: body.email,
      subject: "Hello World",
      react: body.type === "ACCEPT" ? AcceptEmail() : DeclineEmail(),
    });
    return NextResponse.json({
      success: "Email sent successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "Sorry, something went wrong!" });
  }
}

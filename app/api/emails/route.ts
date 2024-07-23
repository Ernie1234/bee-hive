import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(email: string) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "anumahjoshuaeneye@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
}

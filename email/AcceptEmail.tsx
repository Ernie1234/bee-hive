import { Button, Html } from "@react-email/components";

export default function AcceptEmail() {
  return (
    <Html>
      <body>
        <h1>Welcome to Bee Hive!</h1>
        <p>
          Thank you for joining our community. We are excited to have you here.
        </p>
        <Button href="https://bee-hive.vercel.app">back to Bee-hive</Button>
      </body>
    </Html>
  );
}

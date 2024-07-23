import { Button, Html } from "@react-email/components";

export default function EmailResponse() {
  return (
    <Html>
      <body>
        <h1>Welcome to Bee Hive!</h1>
        <p>
          Thank you for joining our community. We are excited to have you here.
        </p>
        <Button href="https://bee-hive.com/login">Login</Button>
      </body>
    </Html>
  );
}

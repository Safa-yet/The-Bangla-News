"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const SignInPage = () => {
  const SignInHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formObject = Object.fromEntries(formData.entries());

    const { email, password } = formObject;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password,
      callbackURL: "/",
    });
  };

  return (
    <div className="flex items-center justify-center  h-[80vh]">
      <Form
        className="flex w-96 flex-col gap-4 bg-white/5 p-8 rounded-lg"
        onSubmit={SignInHandle}
      >
        <Label className="text-center text-2xl mb-4">SignIn Your Account</Label>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        <Button type="submit" className="w-full rounded-xl">
          SignIn
        </Button>
        <p className="text-sm text-center text-white/50">
          Don't Have an Account?{" "}
          <Link href="/signup" className="text-white font-bold">SignUp</Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default SignInPage;

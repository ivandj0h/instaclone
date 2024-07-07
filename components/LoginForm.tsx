"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { calSans } from "@/app/fonts";
import Image from 'next/image';

export default function LoginForm() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 rounded-lg dark:bg-gray-900 p-8 shadow-lg max-w-md mx-4">
        <h3 className={`${calSans.className} mb-6 text-2xl text-center text-black dark:text-white`}>
          Welcome to Instaclone, Please log in to continue.
        </h3>
        <LoginButton />
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <Button
      className="flex items-center justify-center w-full border border-gray-300 rounded-lg p-2 bg-white dark:bg-gray-700 text-black dark:text-white"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    >
      <Image src="/google-logo.svg" alt="Google Logo" width={24} height={24} className="mr-2" />
      Log in with Google
    </Button>
  );
}

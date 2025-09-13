"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/UI-Pulse-navbar";
import { SignedOut, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const { isSignedIn, user } = useUser();

  const router = useRouter();
  function redirect(href: string) {
    router.push(href);
  }

  return (
    <div>
      <Navbar />
      <main className="text-center">
        {isSignedIn ? (
          <>
            <p className="text-4xl p-3">Welcome back, {user.fullName}</p>
            <p className="text-2xl">
              Everything your business needs — in one place.
            </p>
          </>
        ) : (
          <p>Hi</p>
        )}
        <SignedOut>
          <p className="text-4xl p-3">Pulse</p>
          <p className="text-2xl">
            Everything your business needs — in one place.
          </p>
          <Button
            variant="default"
            className="mt-3"
            onClick={() => {
              redirect("/sign-up");
            }}
          >
            Get Started
          </Button>
          <Button variant="outline" className="bg-white text-black ml-4">
            Learn More
          </Button>
        </SignedOut>
      </main>
      <div className="text-center learn-more mt-30">
        <p className="text-3xl">What is Pulse?</p>
        <div className="mt-3">
          <p className="text-2xl">
            Pulse is a web app designed for your business.
          </p>
          <p className="text-2xl">
            Pulse has everything from calendar, to employee management.
          </p>
        </div>
      </div>
    </div>
  );
}

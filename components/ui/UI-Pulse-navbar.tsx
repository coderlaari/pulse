"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const router = useRouter();
  function redirect(href: string) {
    router.push(href);
  }
  return (
    <nav className="flex items-center justify-between w-full h-20 bg-gradient-to-r from-[#1E1E2F] to-[var(--pulse-accent)] rounded-2xl px-8">
      {/* Left side links */}
      <div className="flex items-center space-x-6 text-lg">
        <Link
          href="/"
          className="hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/features"
          className="hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          Pricing
        </Link>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <SignedOut>
          <Button
            variant="default"
            className="bg-white text-black hover:bg-gray-200 transition-colors duration-300"
            onClick={() => {
              redirect("/sign-up");
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-white text-black"
            onClick={() => {
              redirect("/sign-in");
            }}
          >
            Sign In
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

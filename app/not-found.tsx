"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/UI-Pulse-navbar";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className="text-center">
        <p className="text-4xl p-3">Pulse</p>
        <p className="text-2xl p-3 font-thin">404 | Page Not Found</p>
        <Button variant="outline" className="text-black" onClick={goHome}>
          Home
        </Button>
      </div>
    </div>
  );
}

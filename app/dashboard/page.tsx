"use client";

import React from "react";
import Navbar from "@/components/ui/UI-Pulse-navbar-dashboard";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div>
      <Navbar />
      <main className="m-5">
        <p className="text-4xl">Welcome back, {user?.fullName}!</p>
      </main>
    </div>
  );
}

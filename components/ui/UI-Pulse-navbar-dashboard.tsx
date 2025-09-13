"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
  Settings,
  PaperclipIcon,
  Box,
  Calendar,
  User,
  Home,
} from "lucide-react";
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
          href="/dashboard"
          className="flex gap-2 hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          <Home className="m-0.5" />
          Home
        </Link>
        <Link
          href="/dashboard/employees"
          className="flex gap-2 hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          <User className="m-0.5" />
          Employees
        </Link>
        <Link
          href="/dashboard/calendar"
          className="flex gap-2 hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          <Calendar className="m-0.5" />
          Calendar
        </Link>
        <Link
          href="/dashboard/projects"
          className="flex gap-2 hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          <Box className="m-0.5" />
          Projects
        </Link>
        <Link
          href="/dashboard/reports"
          className="flex gap-2 hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          <PaperclipIcon className="m-0.5" />
          Reports
        </Link>
        <Link
          href="/dashboard/settings"
          className="flex gap-2 hover:text-[var(--pulse-accent)] transition-colors duration-300"
        >
          <Settings className="m-0.5" />
          Settings
        </Link>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <UserButton />
      </div>
    </nav>
  );
}

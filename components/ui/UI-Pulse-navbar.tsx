import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center space-x-6 text-lg w-full h-20 bg-gradient-to-r from-[#1E1E2F] to-[var(--pulse-accent)] rounded-2xl">
      <a
        href="/"
        className="hover:text-[var(--pulse-accent)] transition-colors duration-300"
      >
        Home
      </a>
      <a
        href="/features"
        className="hover:text-[var(--pulse-accent)] transition-colors duration-300"
      >
        Features
      </a>
      <a
        href="/pricing"
        className="hover:text-[var(--pulse-accent)] transition-colors duration-300"
      >
        Pricing
      </a>
    </nav>
  );
}

export default Navbar;

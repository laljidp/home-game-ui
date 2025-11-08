// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import { Button } from "./button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 transform transition-transform md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-8 space-y-8 mt-20">
          <a href="#" className="block text-lg font-bold text-white">
            Our Work
          </a>
          <a href="#" className="block text-lg font-bold text-white">
            Solutions
          </a>
          <a href="#" className="block text-lg font-bold text-white">
            Company
          </a>
          <Button>Lets Work</Button>
        </div>
      </div>
    </>
  );
}

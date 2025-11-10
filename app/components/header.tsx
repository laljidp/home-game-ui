// components/Header.tsx
"use client";

import { BigCtaButton } from "./big-cta-button";
import { ArrowUpIcon, LogoIcon, MenuIcon } from "./svgs";

export function Header() {
  return (
    <header className="relative overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto flex items-start justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 px-6 py-4">
          <div className="bg-lime h-20 w-7" />
          <div className="space-y-3">
            <LogoIcon className="h-[18px] w-auto" />

            <p className="font-chakra text-gray max-w-164 text-xs leading-4.5 font-bold tracking-widest uppercase">
              {`// WE BUILD NEXT-GEN DIGITAL PRODUCTS EST 2017`}
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-14 md:flex">
          {["Our Work", "Solutions", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-slate font-chakra text-base font-bold tracking-wider uppercase transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
          <MenuIcon className="h-6 w-6 cursor-pointer text-white" />
          <BigCtaButton>
            Let’s Work <ArrowUpIcon />
          </BigCtaButton>
        </nav>
      </div>

      {/* Lime green tab on the right */}
    </header>
  );
}

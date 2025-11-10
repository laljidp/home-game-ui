// components/HeroSection.tsx

import { Button } from "./button";
import { MouseScrollIcon } from "./svgs";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-164 py-16 md:py-24">
      <div className="mx-auto text-center md:text-left">
        {/* Headline */}
        <h1 className="font-normalidad-extended lg:text-52 text-custom-white text-4xl font-extrabold -tracking-[4px] uppercase">
          Digital Product Development
          <br />
          Company Fuelled by Gaming DNA
        </h1>

        {/* Lime Green Block */}
        <div className="relative mt-[18px] h-64 md:h-80 lg:h-96">
          <div className="rounded-20 corner-clip-tr absolute inset-0 overflow-hidden">
            <video
              className="w-full"
              src={
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              autoPlay
              muted
            />
          </div>
        </div>

        {/* Subtext */}
        <div className="mt-10 max-w-7xl space-y-2 md:mt-12">
          <p className="font-chakra text-dark-gray text-[22px] leading-[129%] font-bold tracking-normal uppercase italic">
            We build next-generation DIGITAL PRODUCTS with bold design and
            modern technology shaped by deep domain expertise and crafted for
            the PEOPLE of tomorrow
          </p>
        </div>

        {/* CTA Button (centered on mobile, left-aligned on desktop) */}
        <div className="flex items-baseline justify-between">
          <div className="mt-12 flex justify-center gap-4 md:justify-start">
            <Button>WORK WITH US</Button>
            <Button variant="outline">WHAT WE DO</Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate font-chakra text-sm font-bold">
              SCROLL DOWN
            </span>
            <MouseScrollIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

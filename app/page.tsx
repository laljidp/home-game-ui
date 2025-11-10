"use client";
import CompanyList from "./components/company-list";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import CaseStudiesSection from "./components/case-study-section";
import { ArrowUpIcon, ShadeLinesIcon } from "./components/svgs";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <hr className="border-gray mx-164" />
      <CompanyList />
      <CaseStudiesSection />
      <div className="px-164 pb-16">
        <div className="flex items-start justify-end gap-4">
          <i>
            <ShadeLinesIcon />
          </i>
          <div className="font-chakra max-w-xl text-lg leading-[151%] font-bold text-[#B4C8D2]">
            <div className="italic">
              Dive into more stories to see how we turn ideas into powerful
              digital products.
            </div>
            <a
              href="#"
              className="text-dark-lime font-chakra mt-4 flex items-center gap-2 text-xs leading-[14%] font-bold hover:underline"
            >
              <span>SEE ALL STUDIES</span>
              <ArrowUpIcon className="[&>path]:stroke-dark-lime" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

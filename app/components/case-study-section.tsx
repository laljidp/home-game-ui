import Image from "next/image";
import { ArrowUpRight } from "./svgs";
import { cn } from "../lib/utils";
import React from "react";

const portfolioItems = [
  {
    title: "Sparkadia | Web3-powered Gaming & Community Platform",
    image: "/images/sparkadia.png", // Placeholder image
    linkText: "DISCOVER OUR SOFTWARE DEV PHILOSOPHY",
    caseStudyLink: "#",
    testimonial: {
      text: `"We were OPTimistic that RageBite would be an actual partner, not just a vendor after our first meeting with them and we were 100% right. They feel like they are part of our team and are not only great partners, but also great friends. Highly recommend working with their team!"`,
      name: "Chandler Thomilson",
      role: "Co-founder & CEO - Ambitious Games Inc.",
      companyLogo: "/company-logos/optigame-white.svg",
      personLogo: "/images/chandler-thom.png",
    },
  },
  {
    title: "SaaS Platform Built for Agencies, Brands & Influencers",
    image: "/images/creator-byte.png", // Placeholder image
    linkText: "CREATORBYTE",
    caseStudyLink: "#",
    testimonial: {
      text: `"RageBite successfully developed the app and fixed bugs quickly. Their resources were competent and responsive, managing the project well. The team was highly communicative and asked many questions to clarify requirements. Their members produced and delivered exceptionally readable and clean code."`,
      name: "Lorenzo Andre",
      role: "Co-founder & CEO - Kaizen Inc.",
      companyLogo: "/company-logos/creator-byte-white.svg",
      personLogo: "/images/lorenzo-andre.png",
    },
    sectionReverse: true,
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="space-y-24 bg-black px-164 py-16 text-white">
      {portfolioItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="mx-auto space-y-8">
            <h2 className="text-2xl font-normal md:text-3xl">{item.title}</h2>
            <div
              className={cn(
                "flex items-stretch gap-8",
                item.sectionReverse ? "flex-row-reverse" : "",
              )}
            >
              {/* Image */}
              <div
                className={cn(
                  "relative h-[490px] w-2/3 overflow-hidden border-gray-800 bg-gray-900 mix-blend-exclusion",
                  item.sectionReverse ? "card-corner-clip-tr-2" : "",
                )}
              >
                <Image
                  src={item.image}
                  height={300}
                  width={490}
                  alt={item.title}
                  className="absolute inset-0 w-full object-cover"
                />
                <div className="Z-20 absolute inset-0 bg-linear-to-b from-[#133B5B] to-[#051929] opacity-40" />
                <div className="absolute bottom-16 left-8 z-30 flex items-center">
                  <a
                    href={item.caseStudyLink}
                    className="font-chakra text-dark-lime flex items-center gap-2 text-lg font-bold tracking-[14%] hover:underline"
                  >
                    {item.linkText}
                    <ArrowUpRight
                      className="[&>path]:stroke-dark-lime h-4 w-4 [&>path]:stroke-[6px]"
                      size={10}
                    />
                  </a>
                </div>
                <div className="absolute bottom-0 z-30 flex w-full items-center justify-between">
                  <span className="ml-8 text-[22px] font-normal text-white">
                    Read full case study
                  </span>
                  <button className="bg-lime right-0 bottom-0 px-5 py-3 text-sm text-gray-300 hover:text-white">
                    <ArrowUpRight />
                  </button>
                </div>
              </div>

              {/* Testimonial */}
              <div
                className={cn(
                  "flex w-1/3 flex-col justify-between gap-4 border-gray-800 bg-gray-900 px-9 py-14",
                  item.sectionReverse ? "" : "card-corner-clip-tr",
                )}
              >
                <Image
                  height={300}
                  width={400}
                  src={item.testimonial.companyLogo}
                  alt={item.testimonial.name}
                  className="flex h-9 w-fit items-start bg-transparent"
                />
                <div className="flex h-full flex-col justify-between">
                  <p className="font-chakra text-custom-white mb-6 text-sm leading-6 font-medium tracking-wide italic">
                    {item.testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      height={300}
                      width={400}
                      src={item.testimonial.personLogo}
                      alt={item.testimonial.name}
                      className="h-12 w-12 rounded-full bg-gray-700"
                    />
                    <div>
                      <p className="font-semibold">{item.testimonial.name}</p>
                      <p className="text-base font-medium tracking-wide text-[#9AA8BB]">
                        {item.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {index !== portfolioItems.length - 1 && (
            <hr className="border-gray mb-12" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
}

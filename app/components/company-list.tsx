import Image from "next/image";

const LOGOS = [
  "/company-logos/logitech.svg",
  "/company-logos/ucg-events.svg",
  "/company-logos/optigame.svg",
  "/company-logos/game.svg",
  "/company-logos/elite-gaming.svg",
  "/company-logos/bestwap-gg.svg",
  "/company-logos/moonsama.svg",
  "/company-logos/games.svg",
  "/company-logos/tastypill.svg",
  "/company-logos/fragster.svg",
  "/company-logos/creator-byte.svg",
  "/company-logos/kai-zen.svg",
];

export default function CompanyList() {
  return (
    <div className="grid grid-cols-6 items-center gap-x-20 gap-y-16 bg-black px-164 py-16">
      {LOGOS.map((logo, i) => (
        <Image
          src={logo}
          alt="logo-icon"
          height={100}
          width={200}
          key={logo + i}
        />
      ))}
    </div>
  );
}

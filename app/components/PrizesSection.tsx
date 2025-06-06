"use client"

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export const prizes = [
  {
    week: 1,
    title: "Trading Royalty",
    pool: "550K POL",
    metrics: ["Trading Volume (75%)", "Unique Traders (25%)"],
    description: "Highest trading volume and unique trader count wins.",
    weights: {
      tradingVolume: 0.75,
      uniqueTraders: 0.25,
    },
  },
  {
    week: 2,
    title: "Hardcore Memecoiners",
    pool: "550K POL",
    metrics: ["20+ Swap Users (70%)", "Average Days Held (30%)"],
    description: "Most active traders and longest holders take the prize.",
    weights: {
      swapUsers: 0.7,
      averageDaysHeld: 0.3,
    },
  },
  {
    week: 3,
    title: "Overachievers",
    pool: "550K POL",
    metrics: ["Market Cap (40%)", "BTC Outperformance (60%)"],
    description: "Top market cap and best Bitcoin performance ratio.",
    weights: {
      marketCap: 0.4,
      btcOutperformance: 0.6,
    },
  },
  {
    week: 4,
    title: "",
    pool: "",
    metrics: [],
    description: "",
  },
];

export function PrizesSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-10 md:py-24 px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-white text-3xl md:text-5xl font-medium leading-10">
            Level up. Grow community. Get funded.
          </div>
          <div className="text-white/70 text-xl font-normal leading-7">
            $150,000 in LYX in total funding
          </div>
        </div>

        <div className="flex flex-col gap-4 mx-auto relative">
          <Image
            // src={isMobile ? "/brand/prizeVertical.svg" : "/brand/prize.svg"}
            src="/brand/prize.svg"
            alt="Prizes"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="mt-10 md:mt-20 mx-auto flex justify-center">
        <Button
          onClick={() =>
        window.open("https://x.com/lukso_io", "_blank")
          }
          variant="dark"
        >
          Follow LUKSO for updates <ArrowRight size={16} />
        </Button>
        
      </div>
    </section>
  );
}

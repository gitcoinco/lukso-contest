"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";
import BgHero from "./media/BgHero";
import Pill from "./Pill";

export default function Hero() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <div className="relative min-h-[800px] md:min-h-[910px] md:h-screen flex items-center">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <BgHero style={{ alignItems: "center" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-16 mt-20">
          <Pill variant="dark">Feb - June 2025</Pill>
        </div>

        <div className="flex flex-col md:gap-2 md:mb-8 -mb-2">
          <div className="text-center text-white text-[25px] md:text-[40px] font-semibold leading-[54px]">
            LUKSO Grants Wave 2
          </div>
          <div className="text-center text-white text-[60px] md:text-[90px] font-bold font-['Vipnagorgialla'] md:leading-[99px]">
            HACK THE GRID
          </div>
          <div className="text-center text-white text-[25px] lg:text-[40px] font-semibold leading-[54px]">
            Break the System, Build the Future
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex flex-col sm:flex-row mt-4 justify-center">
            <Pill variant="dark">Total Funding: $150,000 </Pill>
          </div>
        </div>
      </div>
    </div>
  );
}

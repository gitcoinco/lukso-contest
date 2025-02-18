"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import BgHero from "./media/BgHero";
import Pill from "./Pill";
import Image from "next/image";

export default function Hero() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <BgHero style={{ width: "calc(100% + 100px)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="flex items-center justify-center gap-3 mb-16 mt-20">
          <Pill variant="dark">Feb - April 2025</Pill>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <div className="text-center text-white text-[40px] font-semibold font-['Inter'] leading-[54px]">
            LUKSO Grants Wave 2
          </div>
          <div className="text-center text-white text-[90px] font-bold font-['Vipnagorgialla'] leading-[99px]">
            HACK THE GRID
          </div>
          <div className="text-center text-white text-[40px] font-semibold font-['Inter'] leading-[54px]">
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

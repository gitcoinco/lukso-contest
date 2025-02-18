"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight } from "lucide-react";
import Logo from './media/Logo';
import Button from "./Button";
import BgRight from "./media/BgRight";

export function SecondHero() {
  const { theme } = useTheme();

  return (
    <section 
      className="py-20 p-10" 
      style={{
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Background for mobile only */}
          <div className="absolute inset-0 md:hidden">
            <BgRight style={{
              width: '100%',
              height: '100%',
              opacity: 0.1,
            }} />
          </div>

          {/* Text content - left column */}
          <div className="w-full md:w-1/2 text-left relative z-10">

            <div className="text-[#ff2975] text-5xl font-medium leading-[54px] mb-4">
              Break the system, build the future
            </div>
            <div className="text-white/70 text-[17.02px] font-medium leading-[29.25px]">
              LUKSO is launching Hack The Grid, a four-level builder program designed to push mini dApps to the next level.
              This initiative challenges developers to build high-impact mini dApps for The Grid, 
              a feature that transforms Universal Profiles into dynamic, interactive spaces where digital identity, 
              social interaction, and creativity collide.
            </div>

            <div className="mt-20">
              <Button
                onClick={() =>
                  window.open("https://apply.lukso.gitcoin.co", "_blank")
                }
                variant="dark"
              >
                Make your mark <ArrowRight size={16}/>
              </Button>
            </div>
          </div>

          {/* Background image - visible only on desktop */}
          <div className="hidden md:flex w-full md:w-1/2 relative h-[500px] items-center justify-end">
            <BgRight style={{
              width: '80%',
              height: 'auto',
              position: 'absolute',
              right: '-50px',
              transform: 'translateY(-50%)',
              top: '50%'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

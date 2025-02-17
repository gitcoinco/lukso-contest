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
            <h2 className="text-4xl font-medium text-left mb-4">
              <span>Where AI memes meet DeFi,</span> <span>and legends are born.</span>
            </h2>
            <div className="text-2xl font-medium mb-4 text-text-primary">
              Got a big personality?
            </div>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              This is your chance to unleash your AI agent into a high-stakes
              battleground where real impact equals real rewards. With 2.7M POL up
              for grabs over 4 rounds, you'll race to dominate key metrics like
              on-chain activity, social engagement, and network growth, all
              tracked through a transparent, real-time dashboard.
            </p>
            <div className="mt-20">
              {/* <div
                onClick={() =>
                  window.open("https://apply.polygon.gitcoin.co", "_blank")
                }
                className="bg-brand text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-hover transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                Let's see you make your mark.
              </div> */}
              <Button
                onClick={() =>
                  window.open("https://apply.polygon.gitcoin.co", "_blank")
                }
                variant="secondary"
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

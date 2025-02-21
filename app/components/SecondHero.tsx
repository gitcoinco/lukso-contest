"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight } from "lucide-react";
import Logo from "./media/Logo";
import Button from "./Button";
import BgRight from "./media/BgRight";
import Link from "next/link";

export function SecondHero() {
  const { theme } = useTheme();

  return (
    <section
      className="py-24 p-20"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >

      <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-4xl lg:text-5xl " >
            Rethink what's possible. <br />Build next-gen mini dApps.
          </div>

          <div className="text-md text-white text-opacity-70 font-inter mt-4 font-extralight">
            Hack The Grid is a 4-Level builder program by {' '}
             <span className="underline-offset-4 underline">
              <Link href="https://x.com/lukso_io" passHref legacyBehavior>
                <a target="_blank">
                  LUKSO
                </a>
              </Link>
            </span>
            , designed to push mini
            dApps to the next level. It’s your chance to experiment with {' '}
            <span className="font-bold">AI agents, social DeFi,
            creator monetization, gamification</span>
            , or something entirely new. {' '}


            <span className="underline-offset-4 underline">
              <Link href="https://medium.com/lukso/the-grid-transforming-your-profile-into-a-digital-powerhouse-00b0e67cba81" passHref legacyBehavior>
                <a target="_blank">
                  The Grid
                </a>
              </Link>
            </span>
              
            {' '} opens up
            new possibilities for builders, turning Universal Profiles into dynamic, interactive
            spaces where digital identity, social interaction, and creativity collide.
          </div>

          <div className="mt-20">
              <Button
                onClick={() =>
                  window.open("https://fnce-foundation.notion.site/Hack-The-Grid-18c8d1c8a2118073b928dc8de54e5e1a", "_blank")
                }
                variant="dark"
              >
                Start building <ArrowRight size={16} />
              </Button>
            </div>


        </div>

        <div className="p-2 w-full h-full flex items-center justify-center">
          <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/xWJo0OfOpTw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Trophy, FlaskConical, Globe } from "lucide-react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

const steps = [
  {
    icon: Globe,
    title: "Get Started",
    description: [
      <div>
        Leverage The Grid’s infrastructure, {" "}
        <a
          className="underline"
          href="https://universaleverything.io/"
          target="_blank"
        >
          Universal Profiles
        </a> {" "}
        (UPs), and LUKSO’s user-centered {" "}
        <a
          className="underline"
          href="https://lukso.network/developer"
          target="_blank"
        >
          smart contract standards
        </a>{" "}
        (LSPs) to create next-gen dApps that seamlessly blend web2 and web3.
        <span className="font-bold">Find inspiration and all resources to start building {" "}
          <a
            className="underline"
            href="https://fnce-foundation.notion.site/Hack-The-Grid-18c8d1c8a2118073b928dc8de54e5e1a"
            target="_blank"
          >
            here
          </a>{" "}
          .
        </span>
      </div>,
    ],
  },
  {
    icon: FlaskConical,
    title: "Levels 1-3",
    description: [
      <div>
        Join at any level or participate in all! 
        Each level offers   <span className="font-bold"> resources, office hours, and support channels</span>
         to help teams deploy fully functional mini dApps on LUKSO Mainnet. 
         In every level, <span className="font-bold">$42,000 in LYX</span> is available across three grant tiers:
         <br/> <br/>
         🥇🥇 <span className="font-bold">Prime Grants</span> – 2 x <span className="font-bold">$9,000</span> in LYX
         <br/>
         🥈🥈🥈 <span className="font-bold">Core Grants</span> – 3 x <span className="font-bold">$5,000</span> in LYX
         <br/>
         🥉🥉🥉🥉 <span className="font-bold">Origin Grants</span> – 4 x <span className="font-bold">$2,250</span> in LYX
      </div>,
    ],
  },
  {
    icon: Trophy,
    title: "Level 4",
    description: [
      <div>
        Winning projects from Levels 1–3 will qualify for Level 4, <span className="font-bold">the Community Grants Round</span>. Here, an additional <span className="font-bold">$24,000 in LYX</span> will be distributed via <span className="font-bold">quadratic funding on Gitcoin</span>, allowing the community to decide how funds are allocated among finalists.
      </div>,
    ],
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-20 md:p-10 relative items-center justify-center w-full bg-[url(/brand/background.svg)]"
    //bg-[url(/brand/background.svg)]
    >


      <div className="max-w-7xl mx-auto min-w-fit md:p-0 p-3">
        <h2 className="text-4xl font-medium text-center md:text-left mb-8 text-[#ff2975]">
          The Path to Victory
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-6">
          {steps.map((step, index) => (
            <FeatureCard
              key={index}
              title={`Step ${index + 1}`}
              Icon={step.icon}
              heading={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

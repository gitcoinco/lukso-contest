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
        Before you dive in, make sure you have everything you need. Start by
        reading our{" "}
        <a
          className="underline"
          href="https://fnce-foundation.notion.site/Hack-The-Grid-18c8d1c8a2118073b928dc8de54e5e1a"
          target="_blank"
        >
          guide
        </a>{" "}
        and downloading the{" "}
        <a
          className="underline"
          href="https://chromewebstore.google.com/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn"
          target="_blank"
        >
          Universal Profile Browser Extension
        </a>{" "}
        to unlock full functionality on The Grid.
      </div>,
    ],
  },
  {
    icon: FlaskConical,
    title: "Build on the grid",
    description: [
      <div>
        Hack The Grid is all about pushing the boundaries of digital identity
        and creativity. Experiment, innovate, and bring your vision to
        life—there are no constraints, just endless possibilities.
      </div>,
    ],
  },
  {
    icon: Trophy,
    title: "Secure the W",
    description: [
      <div>
        Once your project is ready, submit it for a chance to earn funding and
        recognition. Each round rewards the top 20 projects, so bring your
        A-game!
      </div>,
    ],
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-20 p-10 relative"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: -1 }}>
        <Image
          src="/brand/bgHowItWorks.svg"
          alt="How it works background"
          width={1441}
          height={312}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-left mb-8 text-[#ff2975]">
          The Path to Victory
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
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

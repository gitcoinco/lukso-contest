"use client";

import React from "react";
import { FileCheck, BarChart2, Trophy } from "lucide-react";
import FeatureCard from "./FeatureCard";

const steps = [
  {
    icon: FileCheck,
    title: "Submit Your Masterpiece",
    description:
      ["Deploy your galaxy brain token. Show us your whitepaper (or memepaper). Prove you're built different."],
  },
  {
    icon: BarChart2,
    title: "Level Up Your Stats",
    description:
      ["Grind those metrics. Build your army. Watch those charts go up and to the right."],
  },
  {
    icon: Trophy,
    title: "Secure the W",
    description:
      ["Top projects share the POL treasure chest.", "Higher rank = bigger share. Simple as that."],
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-20 p-10"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-left mb-8">
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

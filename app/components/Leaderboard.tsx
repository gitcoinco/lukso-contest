"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import BgFooter from "./media/BgFooter";
import { useRouter } from "next/navigation";

export function Leaderboard() {
  const router = useRouter();

  return (
    <section className="relative py-20 p-10 overflow-hidden" id="leaderboard">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-5xl text-[#ff2975] font-medium text-center">
          Live Rankings & Rewards
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col gap-6">
          <div className="text-center text-white/70 text-[19.06px] font-normal leading-7">
            Track your progress in real time on our dynamic leaderboard. Across
            four levels, builders will compete for a $150,000 LYX prize pool by
            launching functional mini dApps on LUKSO Mainnet.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <div className="text-brand font-medium text-2xl mb-2">
                Bi-weekly updates
              </div>
              <p className="text-text-secondary font-normal">
                Rankings refresh every 6 hours with live on-chain data
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <div className="text-brand font-medium text-2xl mb-2">
                Top Projects Win
              </div>
              <p className="text-text-secondary font-normal">
                Each week's top performers share the prize pool
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <div className="text-brand font-medium text-2xl mb-2">
                Milestone Based Payout
              </div>
              <p className="text-text-secondary font-normal">
                Winners receive 70% upfront and 30% upon adoption KPIs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={() => router.push("/leaderboard")} variant="dark">
            View Live Rankings <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

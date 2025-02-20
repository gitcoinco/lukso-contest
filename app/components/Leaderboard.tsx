"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import BgFooter from "./media/BgFooter";
import { useRouter } from "next/navigation";

export function Leaderboard() {
  const router = useRouter();

  return (
    <section className="relative py-24 px-20 overflow-hidden" id="leaderboard">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-5xl text-white font-medium text-center">
          Milestones & The Grid Rankings
        </h2>

        <div className=" mx-auto text-center mb-12 flex flex-col gap-6">
          <div className="text-center text-white/70 text-[19.06px] font-normal leading-7">
            Track progress, unlock rewards, and level up your mini dApp.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">



            <div className="bg-surface p-6 rounded-xl shadow-md">
              <div className="text-brand font-medium text-2xl mb-2 pt-6">
                Two-Step Milestones
              </div>
              <p className="text-md text-white text-opacity-70 font-inter p-4 font-extralight">
                Grant payouts are structured into two phases to ensure both immediate support and continued impact. 
                <span className="font-bold">Winners receive 70% of their grant</span> directly upon winning. 
                The remaining <span className="font-bold">30% is unlocked</span> once they meet standardized KPIs focused on 
                adoption — designed to be achievable within four weeks after receiving the initial payout.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-md">
              <div className="text-brand font-medium text-2xl mb-2 pt-6">
                The Grid Rankings
              </div>
              <p className="text-md text-white text-opacity-70 font-inter p-4 font-extralight">
                The leaderboard ranks mini dApps based on <span className="font-bold">user adoption and activity</span>.
                 It provides a transparent view of which projects are performing best and tracks their daily progress.
                  All working dApp submissions for <span className="font-bold">Hack The Grid</span> are included — whether a project won a grant or not.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-md">
              <div className="text-brand font-medium text-2xl mb-2 pt-6">
                Transparent Progress
              </div>
              <p className="text-md text-white text-opacity-70 font-inter p-4 font-extralight">
                The Grid Rankings offer a daily snapshot of mini dApp adoption, 
                helping builders track their impact and compare progress. 
                It also highlights which grantees have unlocked their second milestone, 
                providing a transparent view of ongoing development. 
                This visibility helps the <span className="font-bold">LUKSO & Gitcoin</span> community see which projects are gaining 
                traction and make informed decisions when allocating funding in Level 4.
                </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8">

          <Button
            onClick={() =>
              window.open("https://fnce-foundation.notion.site/Hack-The-Grid-18c8d1c8a2118073b928dc8de54e5e1a ", "_blank")
            }
            variant="dark"
          >
            Start Building <ArrowRight size={16} />
          </Button>


          <Button onClick={() => router.push("/leaderboard")} variant="dark">
            View leaderboard <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

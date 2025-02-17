import React from "react";
import { CURRENT_WEEK, weeks } from "../constants/weeks";
import { Lock } from "lucide-react";
import Pill from "./Pill";

export const prizes = [
  {
    week: 1,
    title: "Trading Royalty",
    pool: "550K POL",
    metrics: ["Trading Volume (75%)", "Unique Traders (25%)"],
    description: "Highest trading volume and unique trader count wins.",
    weights: {
      tradingVolume: 0.75,
      uniqueTraders: 0.25,
    },
  },
  {
    week: 2,
    title: "Hardcore Memecoiners",
    pool: "550K POL",
    metrics: ["20+ Swap Users (70%)", "Average Days Held (30%)"],
    description: "Most active traders and longest holders take the prize.",
    weights: {
      swapUsers: 0.7,
      averageDaysHeld: 0.3,
    },
  },
  {
    week: 3,
    title: "Overachievers",
    pool: "550K POL",
    metrics: ["Market Cap (40%)", "BTC Outperformance (60%)"],
    description: "Top market cap and best Bitcoin performance ratio.",
    weights: {
      marketCap: 0.4,
      btcOutperformance: 0.6,
    },
  },
  {
    week: 4,
    title: "",
    pool: "",
    metrics: [],
    description: "",
  },
];

export function PrizesSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-left mb-4">
          2.7M POL Prize Pool
        </h2>
        <p className="text-xl text-left text-text-secondary mb-12">
          Compete per round. Build community. Secure the bag.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => {
            const isUpcoming = prize.week > CURRENT_WEEK;

            return (
              <div
                key={prize.week}
                className={`
                  relative flex flex-col items-center text-center p-6 rounded-xl bg-surface 
                  shadow-lg hover:shadow-xl transition-shadow border-2 border-brand border-opacity-10
                  ${isUpcoming ? "opacity-80" : ""}
                `}
              >
                {/* Week Badge */}
                <div
                  className={`
                  absolute -top-3 -right-3 px-3 py-1 rounded-lg text-sm shadow-lg
                  ${isUpcoming ? "bg-text-secondary" : "bg-[#6154F3]"} 
                  text-white
                `}
                >
                  Round {prize.week}
                </div>

                {isUpcoming ? (
                  <div className="flex-1 flex flex-col items-center justify-center w-full py-8">
                    <Lock className="w-10 h-10 text-text-secondary mb-4 opacity-50" />
                    <p className="text-sm text-text-secondary mb-4">
                      Metrics and prize pool will be revealed
                    </p>
                    <div
                      style={{
                        width: "150px",
                        height: "30px",
                        padding: "3px 10px 3px 10px",
                        gap: "10px",
                        borderRadius: "6px 6px 6px 6px",
                        background: "#FFFFFF1A",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          lineHeight: "20px",
                          textAlign: "left",
                          textUnderlinePosition: "from-font",
                          textDecorationSkipInk: "none",
                          color: "#FFFFFFB2",
                        }}
                      >
                        {/* {weeks[index].dateRange} */}
                        To be announced
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Title */}
                    <h3 className="font-bold text-xl mb-4">{prize.title}</h3>
                    {/* Prize Pool */}
                    <div className="text-2xl font-bold text-brand mb-4 flex flex-col">
                      {prize.pool.includes(" + ") ? (
                        <>
                          {prize.pool.split(" + ")[0]}
                          <div>
                            <span className="text-white">+ </span>
                            {prize.pool.split(" + ")[1]}
                          </div>
                        </>
                      ) : (
                        prize.pool
                      )}
                    </div>
                    {/* Description */}
                    <p className="text-sm text-text-secondary mb-4">
                      {prize.description}
                    </p>
                    {/* Metrics */}
                    {/* <ul className="space-y-2 w-full"> */}
                    {prize.metrics.map((metric, idx) => (
                      <Pill key={idx} variant="transparent">
                        {metric}
                      </Pill>
                    ))}
                    {/* </ul> */}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center mt-12 text-lg font-medium text-text-secondary">
          Top Projects Win Every Round. NFA, DYOR!
        </p>
      </div>
    </section>
  );
}

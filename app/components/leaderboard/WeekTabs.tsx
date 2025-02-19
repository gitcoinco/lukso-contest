import React from "react";
import { weeks } from "../../constants/weeks";

interface WeekTabsProps {
  activeWeek: number;
  onWeekChange: (week: number) => void;
}

export function WeekTabs({ activeWeek, onWeekChange }: WeekTabsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      <div className="flex flex-col items-start p-4 rounded-xl bg-[rgba(255,255,255,0.05)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
        <div className="flex flex-wrap gap-2">
          {weeks.map((week) => {
            const isActive = activeWeek === week.id;
            const isPast = week.status === "past";
            const isUpcoming = week.status === "upcoming";

            return (
              <button
                key={week.id}
                onClick={() => !isUpcoming && onWeekChange(week.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-[8px] text-[13.016px] font-medium
                  leading-5 tracking-[-0.16px] text-[rgba(255,255,255,0.70)]
                  transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "bg-[#FF2975] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)]"
                      : isUpcoming
                        ? "cursor-not-allowed"
                        : "hover:bg-opacity-80"
                  }
                `}
                disabled={isUpcoming}
              >
                <div className="w-2 h-2 rounded-full bg-[#D1D5DB]" />
                <span>Level {week.id} {week.id > activeWeek ? "[locked for now]" : ""}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

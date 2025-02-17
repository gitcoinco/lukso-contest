import React from 'react';
import { weeks } from '../../constants/weeks';
import { prizes } from '../PrizesSection';

interface WeekTabsProps {
  activeWeek: number;
  onWeekChange: (week: number) => void;
}

export function WeekTabs({ activeWeek, onWeekChange }: WeekTabsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      <div className="bg-surface rounded-xl shadow-lg p-4">
        <div className="flex flex-wrap gap-2">
          {weeks.map((week) => {
            const isActive = activeWeek === week.id;
            const isPast = week.status === 'past';
            const isUpcoming = week.status === 'upcoming';
            
            return (
              <button
                key={week.id}
                onClick={() => !isUpcoming && onWeekChange(week.id)}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 ease-in-out flex items-center gap-2
                  ${isActive 
                    ? 'bg-brand text-white shadow-md' 
                    : isUpcoming
                      ? 'bg-surface-secondary text-text-secondary cursor-not-allowed'
                      : 'bg-surface-secondary text-text-secondary hover:bg-opacity-80'
                  }
                `}
                disabled={isUpcoming}
              >
                <div className={`
                  w-2 h-2 rounded-full
                  ${isActive ? 'bg-white' : isPast ? 'bg-green-400' : 'bg-gray-300'}
                `} />
                { isActive ? <span>Round {week.id}: {prizes[week.id - 1].title}</span> : <span>Round {week.id}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
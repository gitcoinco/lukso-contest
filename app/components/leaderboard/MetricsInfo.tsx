import React from 'react';
import { Info } from 'lucide-react';
import { formatMetricName } from '../../utils/formatters';
import { prizes } from '../PrizesSection';

interface MetricsInfoProps {
  week: number;
  metrics: string[];
  winnersCount: number;
}

export function MetricsInfo({ week, metrics, winnersCount }: MetricsInfoProps) {

  return (
    <div className="mt-12 bg-surface rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-brand" />
        <h3 className="text-xl font-bold">Round {week} Scoring System</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-text-secondary mb-4">
            Rankings are determined by performance across these metrics:
          </p>
          <ul className="space-y-2 text-text-secondary">
            {prizes[week - 1].metrics.map((metric: string) => (
              <li key={metric}>• {metric}</li>
            ))}
          </ul>
        </div>
        <div className="bg-surface-secondary p-4 rounded-lg">
          <p className="text-sm text-text-secondary">
            The leaderboard updates daily, and hourly data can be found{' '}
            <a 
              href="https://flipsidecrypto.xyz/MoDeFi/q/o0uYVK3fWHG4/gpc---tokens-trades"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              here
            </a>
            . <br /> Rankings are finalized every round.
            Top projects receive round rewards proportional to their rank.
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import BgFooter from './media/BgFooter';
import { useRouter } from 'next/navigation';

export function Leaderboard() {
  const router = useRouter();

  return (
    <section className="relative py-20 p-10 overflow-hidden" id="leaderboard"
      style={{
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
      }}>
      <div className="absolute inset-0 flex items-center justify-center" style={{ margin: '0 -50px' }}>
        <BgFooter style={{ width: 'calc(100% + 100px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-center mb-8">
          Live Rankings & Rewards
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl font-normal text-text-secondary mb-6">
            Track your project's performance in real-time on our dynamic leaderboard. 
            Every round, the top projects share rewards from the 2.7M POL prize pool.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <div className="text-brand font-medium text-2xl mb-2">Round Updates</div>
              <p className="text-text-secondary font-normal">Rankings refresh daily with live on-chain data</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <div className="text-brand font-medium text-2xl mb-2">Top Projects Win</div>
              <p className="text-text-secondary font-normal">Each round's top performers share the prize pool</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <div className="text-brand font-medium text-2xl mb-2">Fair Metrics</div>
              <p className="text-text-secondary font-normal">Ranked by market cap, volume, and community growth</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={() => router.push("/leaderboard")}
            variant="secondary"
          >
            View Live Rankings <ArrowRight size={16}/>
          </Button>
        </div>
      </div>
    </section>
  );
}


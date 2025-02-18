"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  Icon: LucideIcon;
  heading: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  Icon,
  heading,
  description,
}) => {

  return (
    <div className="border-none w-[405.34px] h-[432px] p-[26px] bg-[#121212]/90 rounded-3xl shadow-lg border flex-col justify-start items-start gap-4 inline-flex overflow-hidden">
      <div className="text-center text-white/70 text-base font-medium leading-7">
        {title}
      </div>
      <div className="flex justify-center items-center mx-auto py-12">
        <Icon size={42} color="#ff2975"/>
      </div>
      <div className="flex-col justify-start items-center flex">
        <div className="text-center text-white text-xl font-bold leading-7">
          {heading}
        </div>
      </div>
      <div className="self-stretch text-white/70 text-base font-normal leading-normal">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;

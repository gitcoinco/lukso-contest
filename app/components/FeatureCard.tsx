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
    <div
      key={title}
      className="border-none bg-[#121212] bg-opacity-70 rounded-3xl shadow-lg border flex-col justify-start items-start xl:gap-4 inline-flex overflow-hidden mx-auto"
    >

      <div className="flex justify-center items-center mx-auto py-12">
        <Icon size={42} color="#ff2975" />
      </div>
      <div className="flex-col justify-start items-center flex">
        <div className="text-center text-white text-xl font-bold leading-7 px-4">
          {heading}
        </div>
      </div>
      

      <div className="text-md text-white text-opacity-70 font-inter p-4 font-extralight">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;

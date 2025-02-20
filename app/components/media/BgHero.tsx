"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  style?: React.CSSProperties;
}

const BgHero: React.FC<LogoProps> = ({ style }) => {
  return (
    <Image
      src="/brand/welcomeHeroBg.svg"
      alt="Hero background"
      width={1441}
      height={312}
      priority
      style={style}
      className="object-cover min-h-[750px] w-full"
    />
  );
};

export default BgHero;

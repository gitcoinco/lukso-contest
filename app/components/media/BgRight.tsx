"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  style?: React.CSSProperties;
}

const BgRight: React.FC<LogoProps> = ({ style }) => {
  return (
    <Image
      src="/brand/bgRight.png"
      alt="BgRight"
      width={494.41}
      height={470.02}
      priority
      style={style}
    />
  );
};

export default BgRight;

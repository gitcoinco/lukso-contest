"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  style?: React.CSSProperties;
}

const TitleWithLogo: React.FC<LogoProps> = ({ style }) => {
  return (
    <div className="flex items-center gap-2" style={style}>
      <Image
        src="/brand/logo.png"
        alt="Logo"
        width={53}
        height={53}
        priority
      />
      <div className="text-center text-white text-2xl font-bold font-['Vipnagorgialla'] leading-relaxed">
        HACK THE GRID
      </div>
    </div>
  );
};

export default TitleWithLogo;

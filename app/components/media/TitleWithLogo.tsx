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
      <Image
        src="/brand/title.png"
        alt="Title"
        width={280}
        height={53}
        priority
      />
    </div>
  );
};

export default TitleWithLogo;

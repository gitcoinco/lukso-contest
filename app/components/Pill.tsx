"use client";

import React from "react";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "transparent" | "dark" | "black";
}

const Pill: React.FC<PillProps> = ({ children, variant = "default" }) => {
  const pillStyles: Record<
    "default" | "transparent" | "dark" | "black",
    React.CSSProperties
  > = {
    default: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "303px",
      height: "34px",
      padding: "10px 16px",
      gap: "10px",
      borderRadius: "40px 40px 40px 40px",
      border: "2px solid #7B3FE4",
      opacity: "1",
    },
    transparent: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "220px",
      height: "30px",
      padding: "10px 16px",
      gap: "10px",
      borderRadius: "40px 40px 40px 40px",
      background: "#FFFFFF1A",
      marginBottom: "10px",
    },
    dark: {
      display: "flex",
      padding: "20px 32px",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "32.641px",
      border: "1.509px solid #FFF",
      background: "#111",
    },
    black: {
      display: "flex",
      padding: "16px 24px",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      borderRadius: "32.641px",
      background: "#111",
    },
  };

  const textStyles: Record<
    "default" | "transparent" | "dark" | "black",
    React.CSSProperties
  > = {
    default: {
      fontSize: "20.07px",
      fontWeight: "400",
      lineHeight: "20.07px",
      textAlign: "left" as const,
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none" as const,
      color: "#7B3FE4",
    },
    transparent: {
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "15.07px",
      textAlign: "left" as const,
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none" as const,
      color: "#FFFFFFB2",
    },
    dark: {
      color: "#FFF",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "-0.24px",
    },
    black: {
      color: "#FFF",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "100%",
    },
  };
  return (
    <div
      style={pillStyles[variant]}
      className="md:px-5 px-0 mx-auto items-center justify-center text-[24px]"
    >
      <span
        style={textStyles[variant]}
        className="px-0 lg:text-[24px] text-[20px]"
      >
        {children}
      </span>
    </div>
  );
};

export default Pill;

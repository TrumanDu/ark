import React from "react";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#D4942A" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontFamily="Outfit, system-ui, sans-serif"
        fontWeight="700"
        fill="#FAF8F5"
      >
        <tspan fontSize="15">T</tspan>
        <tspan fontSize="15">D</tspan>
      </text>
    </svg>
  );
}

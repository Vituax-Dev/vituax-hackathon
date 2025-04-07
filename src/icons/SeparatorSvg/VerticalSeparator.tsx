import React from "react";

export const VerticalSeparator = ({
  color = "#C1CAFB",
}: {
  color?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="12"
      viewBox="0 0 4 12"
      fill="none"
    >
      <rect
        y="12"
        width="12"
        height="4"
        rx="2"
        transform="rotate(-90 0 12)"
        fill={color}
      />
    </svg>
  );
};

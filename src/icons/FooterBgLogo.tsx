import React from "react";

export const FooterBgLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="441"
      height="504"
      viewBox="0 0 441 504"
      fill="none"
      className={className}
    >
      <g opacity="0.08">
        <path d="M319.455 252L0 69.4562V434.544L319.455 252Z" fill="#C1CAFB" />
        <path
          d="M441 321.456L121.545 138.912V504L441 321.456Z"
          fill="#C1CAFB"
        />
        <path d="M441 182.544L121.545 365.088V0L441 182.544Z" fill="#C1CAFB" />
        <path
          d="M121.545 365.088L319.455 252L121.545 138.912L121.545 365.088Z"
          fill="#3D04AA"
        />
      </g>
    </svg>
  );
};

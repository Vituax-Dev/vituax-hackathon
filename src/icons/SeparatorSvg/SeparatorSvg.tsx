import React from "react";
import styles from "./SeparatorSvg.module.css";

export interface ISeparatorSvgProps {
  color: string;
  className?: string;
}

export default function SeparatorSvg({
  color,
  className = "",
}: ISeparatorSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      className={styles[className] || className}
    >
      <rect width="20" height="8" rx="4" fill={color} />
    </svg>
  );
}

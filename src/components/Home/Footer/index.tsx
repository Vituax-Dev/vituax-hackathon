import React from "react";
import { DesktopFooter } from "./DesktopFooter";

export interface IFooterProps {
  lan: "pt" | "en" | "es";
}

export default function Footer({ lan }: IFooterProps) {
  return <DesktopFooter lan={lan} />;
}

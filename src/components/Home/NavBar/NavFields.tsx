import React from "react";
import { Box } from "@mui/material";
import { t } from "@/language";
import { INavBarProps } from ".";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { VerticalSeparator } from "@/icons/SeparatorSvg/VerticalSeparator";

export default function NavFields({ lan }: INavBarProps) {
  const text = t[lan].navBar;

  return (
    <Box display={"flex"} className={styles.menuItemBox}>
      <Link className={styles.menuItem} href={`#aboutUs`}>
        {text.aboutUs}
      </Link>
      <VerticalSeparator color="var(--mediumBlue)" />
      <Link className={styles.menuItem} href={`#advantages`}>
        {text.advantages}
      </Link>
      <VerticalSeparator color="var(--mediumBlue)" />
      <Link className={styles.menuItem} href={`#solutions`}>
        {text.solutions}
      </Link>
    </Box>
  );
}

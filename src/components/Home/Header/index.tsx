import SwitchLanguages from "@/components/SwitchLanguages";
import { ProfileIcon } from "@/icons/ProfileIcon";
import { VerticalSeparator } from "@/icons/SeparatorSvg/VerticalSeparator";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";

export const Header = ({ lan }: { lan: Languages }) => {
  const text = t[lan].header;

  return (
    <Box
      id="mainHeader"
      sx={{
        boxSizing: "border-box",
        padding: "14px 32px",
        display: "flex",
        width: "100%",
        maxWidth: "1616px",
        justifyContent: "flex-end",
        alignItems: "center",
        "@media (max-width: 650px)": { display: "none" },
      }}
    >
      <Box
        sx={{
          color: "var(--mediumBlue)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginRight: "48px",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        <SwitchLanguages />
        <VerticalSeparator color="var(--lightBlue)" />
        <Link href={"#contactUs"} className={styles.navLink}>
          {text.support}
        </Link>
        <VerticalSeparator color="var(--lightBlue)" />
        <Link
          href={"/login"}
          about="Login page"
          target="_blank"
          className={styles.navLink}
        >
          <Box sx={{ display: "flex", gap: "5px" }}>
            <ProfileIcon />
            <span>{text.login}</span>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

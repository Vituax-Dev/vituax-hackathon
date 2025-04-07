import { Box } from "@mui/material";
import React from "react";
import styles from "./Solutions.module.css";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";

export const CloudComputing = ({ lan }: { lan: Languages }) => {
  const text = t[lan].solutions;
  return (
    <Box
      sx={{
        maxWidth: "764px",
        boxSizing: "border-box",
        marginTop: "48px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <p className={styles.text} aria-hidden={true} role="button">
        {text.textTwo}
      </p>
      <p
        className={styles.text}
        aria-hidden={false}
        style={{ display: "none" }}
        role="button"
      >
        <span className={styles.boldText}>{text.textThreeBold}</span>
        {text.textThreeEnd}
      </p>
    </Box>
  );
};

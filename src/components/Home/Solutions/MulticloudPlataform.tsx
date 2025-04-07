import { Box } from "@mui/material";
import React from "react";
import styles from "./Solutions.module.css";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";

export const MulticloudPlataform = ({ lan }: { lan: Languages }) => {
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
      <p className={styles.subTitle}>
        {text.subStart}
        <span className={styles.yellowSub}>{text.subBold}</span>
      </p>
      <p className={styles.text}>
        {text.textOneStart}
        <span className={styles.boldText}>{text.textOneBold}</span>
      </p>
    </Box>
  );
};

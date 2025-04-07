import { Box } from "@mui/material";
import React from "react";
import styles from "./VituaxPartners.module.css";
import { CardsContainer } from "./CardsContainer";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";

export const VituaxPartners = ({ lan }: { lan: Languages }) => {
  const text = t[lan].vituaxPartners;
  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        padding: "122px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      id="advantages"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          textWrap: "wrap",
        }}
      >
        <p className={styles.title}>
          {text.titleStart}
          <span className={styles.boldTitle}>{text.titleBold}</span>
        </p>
        <p className={styles.subTitle}>{text.subtitle}</p>
        <CardsContainer lan={lan} />
      </Box>
    </Box>
  );
};

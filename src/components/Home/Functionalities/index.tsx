import React from "react";
import styles from "./Partners.module.css";
import { t } from "@/language";
import LogosCarousel from "./LogosCarousel";
import { Box } from "@mui/material";

export interface IPartnersProps {
  lan: "pt" | "en" | "es";
}

export default function Functionalities({ lan }: IPartnersProps) {
  const text = t[lan].functionalities;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "1220px",
          minHeight: "864px",
          "@media (max-width: 1300px)": {
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            padding: "0 40px",
          },
          "@media (max-width: 650px)": {
            minHeight: "904px",
          },
        }}
      >
        <div className={styles.container} id="learnMore">
          <p className={styles.title}>
            {text.titleStart}
            <span className={styles.boldTitle}>{text.titleBold}</span>
          </p>
          <LogosCarousel lan={lan} />
        </div>
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";
import React from "react";
import IMG from "../../../assets/images/pcSoftware.png";
import Image from "next/image";
import styles from "./SoftwareDescription.module.css";
import { t } from "@/language";

export const SoftwareDescription = ({ lan }: { lan: "pt" | "en" | "es" }) => {
  const text = t[lan].softwareDescription;
  return (
    <Box
      sx={{
        minWidth: "100%",
        width: "max-content",
        boxSizing: "border-box",
        padding: "112px 40px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        "@media (max-width: 1220px)": {
          width: "100%",
        },
      }}
      id="aboutUs"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "1220px",
          boxSizing: "border-box",
          "@media (max-width: 1220px)": {
            width: "100%",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            width: "648px",
            minWidth: "648px",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            "@media (max-width: 1220px)": {
              minWidth: "0",
              maxWidth: "100%",
            },
          }}
        >
          <p className={styles.title}>
            <span className={styles.boldTitle}>{text.boldTitle}</span>
            {text.titleEnd}
          </p>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <p className={styles.desc}>
              {text.p1Start}
              <span className={styles.boldDesc}>{text.p1Bold}</span>
              {text.p1End}
            </p>
            <p className={styles.desc}>{text.p2}</p>
            <p className={styles.desc}>
              {text.p3Start}
              <span className={styles.boldDesc}>{text.p3Bold}</span>
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: "160px",
            "@media (max-width: 1220px)": { display: "none" },
          }}
        >
          <Image src={IMG} alt="pcSoftware" width={655} height={400} />
        </Box>
      </Box>
    </Box>
  );
};

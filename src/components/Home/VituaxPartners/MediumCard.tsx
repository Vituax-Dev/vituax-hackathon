import { IconBg } from "@/icons/IconBg";
import { PaintBucketIcon } from "@/icons/PaintBucketIcon";
import { Box } from "@mui/material";
import React from "react";
import Img from "../../../assets/images/pcSoftwareDarkMode.png";
import Image from "next/image";
import styles from "./VituaxPartners.module.css";

export const MediumCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        borderRadius: "24px",
        backgroundColor: "var(--offWhite, #f9f9f9)",
        width: "396px",
        maxWidth: "100%",
        flexGrow: 1,
        "@media (max-width: 650px)": { width: "296px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "var(--mediumBlue, #647AF4)",
          fontSize: "24px",
          fontWeight: "500",
        }}
      >
        <IconBg>
          <PaintBucketIcon />
        </IconBg>
        {title}
      </Box>
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          color: "var(--mediumBlue, #647AF4)",
        }}
      >
        {description}
      </Box>
      <Box
        sx={{ marginTop: "60px", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={Img}
          alt="pc software in dark mode"
          width={288}
          priority
          className={styles.pcImg}
        />
      </Box>
    </Box>
  );
};

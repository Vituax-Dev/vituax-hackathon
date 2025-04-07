import { IconBg } from "@/icons/IconBg";
import { Box } from "@mui/material";
import React from "react";
import Img from "../../../assets/images/phoneSoftware.png";
import Image from "next/image";
import { MobileIcon } from "@/icons/MobileIcon";
import styles from "./VituaxPartners.module.css";

export const MainCard = ({
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
        padding: "32px 32px 0",
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        borderRadius: "24px",
        backgroundColor: "var(--offWhite, #f9f9f9)",
        width: "396px",
        maxWidth: "100%",
        maxHeight: "673.6px",
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
          <MobileIcon />
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
        sx={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          marginTop: "43px",
        }}
      >
        <Image
          src={"/assests/image/phone.png"}
          alt="software on mobile"
          width={296}
          height={100}
          className={styles.image}
          priority
        />
      </Box>
    </Box>
  );
};

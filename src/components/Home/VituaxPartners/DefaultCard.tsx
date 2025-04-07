import { Box } from "@mui/material";
import React from "react";

export const DefaultCard = ({
  Icon,
  title,
  description,
  paddingBottom = "32px",
  alignItems = "center",
}: {
  Icon: React.ReactNode;
  title: string;
  description: string;
  paddingBottom?: string;
  alignItems?: string;
}) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        padding: `32px 32px ${paddingBottom}`,
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        borderRadius: "24px",
        backgroundColor: "var(--offWhite, #f9f9f9)",
        width: "396px",
        maxWidth: "100%",
        "@media (max-width: 650px)": { width: "296px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          justifyContent: "flex-start",
          alignItems: alignItems,
          color: "var(--mediumBlue, #647AF4)",
          fontSize: "24px",
          fontWeight: "500",
        }}
      >
        {Icon}
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
    </Box>
  );
};

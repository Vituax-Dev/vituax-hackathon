import { Box } from "@mui/material";
import React from "react";

export const IconBg = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        borderRadius: "12px",
        backgroundColor: "#ECEEF2",
      }}
    >
      {children}
    </Box>
  );
};

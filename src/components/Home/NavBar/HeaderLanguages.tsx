import SwitchLanguages from "@/components/SwitchLanguages";
import { Box } from "@mui/material";

export const HeaderLanguages = () => {
  return (
    <Box
      sx={{
        display: "none",
        "@media (max-width: 650px)": {
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: "34px",
          top: "40px",
          zIndex: 100,
        },
      }}
    >
      <SwitchLanguages />
    </Box>
  );
};

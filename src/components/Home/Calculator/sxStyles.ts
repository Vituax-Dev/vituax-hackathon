export const sxStyles = {
  container: {
    width: "100%",
    boxSizing: "border-box",
    padding: "112px 32px",
    "@media (max-width: 650px)": { padding: "0" },
  },
  box: {
    borderRadius: "24px",
    background:
      "linear-gradient(90deg, #F9F9F9 0%, rgba(193, 202, 251, 0.20) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "112px 40px",
  },
  sliderContainer: {
    marginTop: "64px",
    width: "100%",
    maxWidth: "1000px",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#2E2E88",
    textAlign: "left",
  },
  select: {
    background: "#C1CAFB",
    marginTop: "16px",
    color: "#3D04AA",
    fontFamily: `"__vinila_1710d6", "__vinila_Fallback_1710d6" !important`,
    borderRadius: "12px",
    width: "256px",
    height: "40px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4b5cb7",
    },
  },
  slider: {
    color: "#2E2E88",
    marginTop: "24px",
  },
  value: {
    textAlign: "right",
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#2E2E88",
  },
  traffic: {
    color: "#008000",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: "0.5rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "59px",
    gap: "32px",
    "@media (max-width: 1000px)": {
      flexDirection: "column-reverse",
    },
  },
  button: {
    backgroundColor: "#C1CAFB",
    boxSizing: "border-box",
    color: "#3D04AA",
    textTransform: "none",
    borderRadius: "12px",
    fontFamily: `"__vinila_1710d6", "__vinila_Fallback_1710d6" !important`,
    fontSize: "16px",
    fontWeight: 600,
    height: "48px",
    width: "100%",
    maxWidth: "432px",
    "@media (max-width: 1000px)": {
      maxWidth: "100%",
    },
  },
  total: {
    fontSize: "1.2rem",
    color: "#2E2E88",
    fontWeight: "bold",
  },
  labelBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "40px",
  },
};

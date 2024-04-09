import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.4,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderWidth: "1px", borderStyle: "solid" },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "black",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
});

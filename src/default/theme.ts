import { createTheme } from "@mui/material";

export const background = "#ffe3c8";

export const background_2 = "#ffc791";

export const font_primary = "#38512f";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9d4e15",
    },
    secondary: {
      main: "#6e3d0f",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: font_primary,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: font_primary,
        },
      },
    },
  },
});

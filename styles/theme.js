import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    p: {
      fontWeight: "500",
    },
    h3: {
      fontWeight: "500",
    },
    h4: {
      fontWeight: "500",
    },
    h5: {
      fontWeight: "500",
    },
  },
  palette: {
    primary: {
      main: "#FFBE41",
    },
    secondary: {
      main: "#EFEFEF",
    },
  },
});

export default theme;

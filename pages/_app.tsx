import { useEffect } from "react";
import { Box, ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import { ActiveSectionProvider } from "../contexts/ActiveSectionContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS to prevent MUI CSS mismatch warning
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ActiveSectionProvider>
        <Component {...pageProps} />
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}

export default MyApp;

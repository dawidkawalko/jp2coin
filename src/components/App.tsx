import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { TopBar } from "./TopBar";
import { HomePage } from "../pages/HomePage";
import { ColorModeContext } from "../theme/color-context";
import { LoadingPage } from "../pages/LoadingPage";
import useAppImages from "../hooks/useAppImages";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">();
  const [isLoading, setLoading] = useState(true);
  const { loaded } = useAppImages();

  function loadingDelay() {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), 1500));
  }

  useEffect(() => {
    loadingDelay().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("colorMode");
    if (savedMode != null) {
      setMode(savedMode as "light" | "dark");
    } else {
      setMode(prefersDarkMode ? "dark" : "light");
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    if (mode) {
      localStorage.setItem("colorMode", mode);
    }
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Roboto",
        },
        palette: {
          mode: "dark",
          secondary: {
            main: "#ffd700",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {!loaded || isLoading ? (
          <LoadingPage />
        ) : (
          <Box className="page">
            <CssBaseline />
            <TopBar />
            <HomePage />
          </Box>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

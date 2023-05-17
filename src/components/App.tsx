import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { TopBar } from "./TopBar";
import { HomePage } from "../pages/HomePage";
import { ColorModeContext } from "../theme/color-context";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">();

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
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <HomePage />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

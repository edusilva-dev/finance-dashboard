import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";

export function AppRoutesProvider() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        autoHideDuration={3000}
      />
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}

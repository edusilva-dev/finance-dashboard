import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";

export function AppRoutesProvider() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    </LocalizationProvider>
  );
}

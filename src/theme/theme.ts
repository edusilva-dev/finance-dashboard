import { createTheme } from "@mui/material";
import { typography } from "./typography";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";

export const theme = createTheme({
  breakpoints,
  typography,
  palette,
});

import { createTheme, ThemeOptions } from "@mui/material";
import { typography } from "./typography";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { shape } from "./shape";

export const theme: ThemeOptions = createTheme({
  breakpoints,
  typography,
  palette,
  shape,
});

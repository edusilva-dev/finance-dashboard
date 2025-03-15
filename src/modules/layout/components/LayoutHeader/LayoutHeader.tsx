import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretDoubleRight } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

export function LayoutHeader() {
  const location = useLocation();

  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      position="relative"
      sx={{ width: "100%", bgcolor: "background.default", zIndex: 1201 }}
    >
      <Toolbar disableGutters>
        <Stack
          flex={1}
          direction="row"
          justifyContent="space-between"
          px={3}
          py={3.75}
          borderBottom={(theme) => `1px solid ${theme.palette.grey[500]}`}
        >
          <Stack direction="row" alignItems="center" gap={3}>
            {location.pathname === "/" && (
              <Typography variant="h1" fontWeight={700}>
                Hello, User!
              </Typography>
            )}
            <Stack direction="row" alignItems="center" gap={0.5}>
              <Box p={0.5}>
                <CaretDoubleRight
                  size={12}
                  color={theme.palette.grey[700]}
                  weight="bold"
                />
              </Box>
              <Typography
                variant="body2"
                color="grey.700"
                textTransform="capitalize"
              >
                {dayjs(new Date()).locale("pt-br").format("MMM DD, YYYY")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

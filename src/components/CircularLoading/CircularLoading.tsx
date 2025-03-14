import { CircularProgress, Stack } from "@mui/material";

export function CircularLoading() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress sx={{ color: "primary.light" }} />
    </Stack>
  );
}

import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export function LayoutRoot(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Stack direction="row" bgcolor="background.default" width="100%">
      {children}
    </Stack>
  );
}

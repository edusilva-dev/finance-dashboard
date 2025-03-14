import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export function SideMenu(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Stack
      minWidth="280px"
      height="100dvh"
      bgcolor="common.black"
      py={6}
      px={3.5}
      justifyContent="space-between"
    >
      {children}
    </Stack>
  );
}

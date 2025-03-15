import { Stack, StackProps } from "@mui/material";
import { PropsWithChildren } from "react";

export function SideMenuSection(props: PropsWithChildren<StackProps>) {
  const { children, ...stackProps } = props;

  return <Stack {...stackProps}>{children}</Stack>;
}

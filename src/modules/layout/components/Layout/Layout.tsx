import { Outlet } from "react-router-dom";
import LayoutContent from "../LayoutContent/LayoutContent";
import { LayoutHeader } from "../LayoutHeader";
import { LayoutRoot } from "../LayoutRoot";
import { LayoutSideMenu } from "../LayoutSideMenu";
import { Stack } from "@mui/material";

export function Layout() {
  return (
    <LayoutRoot>
      <LayoutSideMenu />
      <Stack flex={1} width="calc(100% - 280px)">
        <LayoutHeader />
        <LayoutContent>
          <Outlet />
        </LayoutContent>
      </Stack>
    </LayoutRoot>
  );
}

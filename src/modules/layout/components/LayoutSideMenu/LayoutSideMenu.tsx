import { SideMenu, SideMenuItem, SideMenuSection } from "@modules/side-menu";
import { Stack, Typography } from "@mui/material";
import {
  ArrowsLeftRight,
  CrosshairSimple,
  Gear,
  Invoice,
  Scroll,
  SquaresFour,
  Wallet,
} from "@phosphor-icons/react";

export function LayoutSideMenu() {
  return (
    <SideMenu>
      <SideMenuSection gap={5}>
        <Typography variant="h1" color="white" textAlign="center">
          FINEbank.IO
        </Typography>
        <Stack gap={2}>
          <SideMenuItem path="/" label="Overview" Icon={SquaresFour} />
          <SideMenuItem path="/balances" label="Balances" Icon={Wallet} />
          <SideMenuItem
            path="/transactions"
            label="Transactions"
            Icon={ArrowsLeftRight}
          />
          <SideMenuItem path="/bills" label="Bills" Icon={Scroll} />
          <SideMenuItem path="/expenses" label="Expenses" Icon={Invoice} />
          <SideMenuItem path="/goals" label="Goals" Icon={CrosshairSimple} />
          <SideMenuItem path="/settings" label="Settings" Icon={Gear} />
        </Stack>
      </SideMenuSection>
    </SideMenu>
  );
}

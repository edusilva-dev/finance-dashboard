import { SideMenu, SideMenuItem, SideMenuSection } from "@modules/side-menu";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  ArrowsLeftRight,
  CrosshairSimple,
  Gear,
  Invoice,
  Scroll,
  SignOut,
  SquaresFour,
  Wallet,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

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
      <SideMenuSection gap={6}>
        <SideMenuItem
          opacity={0.75}
          path="/logout"
          label="Logout"
          Icon={SignOut}
          alwaysActive
        />
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Stack
            direction="row"
            py={4}
            gap={2}
            alignItems="center"
            borderTop={(theme) => `1px solid ${theme.palette.grey.A700}`}
          >
            <Avatar
              src="https://thispersondoesnotexist.com/"
              sx={{ width: "32px", height: "32px" }}
            />
            <Stack>
              <Typography variant="body1" fontWeight={600} color="white">
                Eduardo Castro
              </Typography>
              <Typography variant="body2" color="grey.A100">
                View Profile
              </Typography>
            </Stack>
          </Stack>
        </Link>
      </SideMenuSection>
    </SideMenu>
  );
}

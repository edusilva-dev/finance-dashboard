import { Stack, Typography, useTheme } from "@mui/material";
import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";

type SideMenuItemProps = {
  label: string;
  path: string;
  Icon?: ComponentType<IconProps>;
};

export function SideMenuItem(props: SideMenuItemProps) {
  const { label, Icon, path } = props;

  const location = useLocation();

  const theme = useTheme();

  const isActive =
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Stack
        direction="row"
        alignItems="center"
        gap={1.5}
        px={2}
        py={1.5}
        sx={{
          borderRadius: (theme) => theme.shape.borderRadius,
          bgcolor: isActive ? theme.palette.primary.main : "transparent",
          cursor: "pointer",
          transition: "all 0.12s ease",
          [":hover"]: {
            bgcolor: theme.palette.primary.main,
          },
        }}
      >
        {Icon && (
          <Icon
            size={24}
            color={
              isActive ? theme.palette.common.white : theme.palette.grey.A100
            }
          />
        )}
        <Typography variant="body1" fontWeight={600} color="white">
          {label}
        </Typography>
      </Stack>
    </Link>
  );
}

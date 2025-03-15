import { Stack, Typography, useTheme } from "@mui/material";
import { IconProps } from "@phosphor-icons/react";
import { ComponentType, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

type SideMenuItemProps = {
  label: string;
  path: string;
  Icon?: ComponentType<IconProps>;
  alwaysActive?: boolean;
  opacity?: number;
};

export function SideMenuItem(props: SideMenuItemProps) {
  const { label, Icon, path, alwaysActive = false, opacity } = props;

  const location = useLocation();

  const theme = useTheme();

  const isActive =
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const getBackgroundColor = useCallback(() => {
    if (alwaysActive) {
      return theme.palette.grey.A700;
    }

    if (isActive) {
      return theme.palette.primary.main;
    }

    return "transparent";
  }, [isActive, alwaysActive]);

  const getFontColor = useCallback(() => {
    if (alwaysActive || isActive) {
      return theme.palette.common.white;
    }

    return theme.palette.grey.A400;
  }, [isActive, alwaysActive]);

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
          bgcolor: getBackgroundColor(),
          cursor: "pointer",
          transition: "all 0.12s ease",
          opacity: opacity || 1,
          [":hover"]: {
            ["& p"]: {
              color: theme.palette.common.white,
            },
            ...(!alwaysActive
              ? { bgcolor: theme.palette.primary.main }
              : { opacity: 1 }),
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
        <Typography
          variant="body1"
          fontWeight={600}
          color={getFontColor()}
          sx={{
            transition: "all 0.12s ease",
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Link>
  );
}

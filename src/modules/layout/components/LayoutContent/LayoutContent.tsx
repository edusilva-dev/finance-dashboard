import { CircularLoading } from "@components";
import { Stack } from "@mui/material";
import { PropsWithChildren, Suspense } from "react";

export default function LayoutContent(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Stack
      width="100%"
      maxHeight="calc(100dvh - 93px)"
      overflow="auto"
      py={2}
      px={3}
    >
      <Suspense fallback={<CircularLoading />}>{children}</Suspense>
    </Stack>
  );
}

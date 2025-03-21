import { Stack, StackProps } from "@mui/material";

export type PageContentProps = StackProps;

export function PageContent(props: PageContentProps) {
  const { children, ...rootProps } = props;

  return (
    <Stack gap={6} {...rootProps}>
      {children}
    </Stack>
  );
}

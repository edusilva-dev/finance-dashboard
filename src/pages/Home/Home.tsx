import { Page, PageContent } from "@modules/page";
import { Box, Stack, Typography } from "@mui/material";

export function Home() {
  return (
    <Page>
      <PageContent>
        <Typography variant="h1" fontWeight={700}>
          Home
        </Typography>
        <Stack gap={10}>
          {Array.from({ length: 10 }).map(() => (
            <Box
              sx={{
                width: "50px",
                height: "50px",
                bgcolor: "primary.main",
              }}
            ></Box>
          ))}
        </Stack>
      </PageContent>
    </Page>
  );
}

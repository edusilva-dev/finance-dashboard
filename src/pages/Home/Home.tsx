import { Page, PageContent } from "@modules/page";
import { Typography } from "@mui/material";

export function Home() {
  return (
    <Page>
      <PageContent>
        <Typography variant="h1" fontWeight={700}>
          Home
        </Typography>
      </PageContent>
    </Page>
  );
}

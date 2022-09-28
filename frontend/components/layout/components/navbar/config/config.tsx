import { Button, Grid, Typography } from "@mui/material";
import GenericModal from "components/generals/modal/GenericModal";
import { APP_ROUTES } from "config/appRoutes";
import Link from "next/link";
import { ConfigNavbar } from "../interfaces/navbarConfig.type";

export const NAVBAR_CONFIG: ConfigNavbar = {
  archived: {
    title: "ARCHIVED NOTES",
    elements: [
      <Grid key="archive-notes-anchor" item>
        <Link
          href={APP_ROUTES.listUnarchived}
          
        >
          <a>
            <Typography
              variant="h5"
              color="primary.dark"
              sx={{ fontWeight: "500" }}
            >
              {"<"} Go back to unarchived notes
            </Typography>
          </a>
        </Link>
      </Grid>,
    ],
  },
  unarchived: {
    title: "MY NOTES",
    elements: [
      <Grid key="create-note-form" item>
        <Link href={APP_ROUTES.create}>
          <Button variant="contained" color="primary">
            Create note
          </Button>
        </Link>
      </Grid>,
      <Grid key="archive-notes-anchor" item>
        <Link href={APP_ROUTES.listArchived}>
          <a>
            <Typography
              variant="h5"
              color="primary.dark"
              sx={{ fontWeight: "500" }}
            >
              Archived notes
            </Typography>
          </a>
        </Link>
      </Grid>,
    ],
  },
};

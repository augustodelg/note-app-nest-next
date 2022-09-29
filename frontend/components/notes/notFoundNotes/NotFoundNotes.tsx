import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function NotFoundNotes() {
    const router = useRouter();
  return (
    <Fragment>
      <Typography variant="h1" sx={{ fontWeight: "bold" }} color="secondary">
        No notes here 👀
      </Typography>
      <Button variant="contained" color="primary" onClick={() => router.back()}>
        Back
      </Button>
    </Fragment>
  );
}
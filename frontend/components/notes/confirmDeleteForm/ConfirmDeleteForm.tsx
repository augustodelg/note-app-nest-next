import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { toast } from "react-hot-toast";
import NoteService from "services/noteService";

export default function ConfirmDeleteForm() {
  const router = useRouter();
  const noteId = router.query.noteId as string;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await NoteService.deleteNote(noteId, () => router.back());
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", pb: 2 }}>
        Are you sure you want to delete this note?
      </Typography>
      <Button
        variant="contained"
        color="warning"
        onClick={(event) => handleSubmit(event)}
      >
        YES
      </Button>
    </Grid>
  );
}

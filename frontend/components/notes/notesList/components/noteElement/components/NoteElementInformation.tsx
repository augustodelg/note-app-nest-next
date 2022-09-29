import { Grid, Typography } from "@mui/material";
import { Note } from "interfaces/note.type";

interface Props {
  note: Note;
}
export default function NoteElementInformation(props: Props) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ my: "auto", mx: "auto" }}
    >
      <Grid item>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          color="primary"
        >
          {props.note.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          Last edited: {props.note.updated_at}
        </Typography>
      </Grid>
    </Grid>
  );
}

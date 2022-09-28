import DescriptionIcon from "@mui/icons-material/Description";
import {
  Fade,
  Grid,
  Grow,
  Paper,
  Zoom
} from "@mui/material";

import { Note } from "interfaces/note.type";
import NoteElementButtoms from "./components/NoteElementButtoms";
import NoteElementInformation from "./components/NoteElementInformation";

interface Props {
  note: Note;
}
export default function NoteElement(props: Props) {
  return (
    <Fade in={true} unmountOnExit style={{ transitionDelay: '100ms' }}>
      <Paper elevation={5} sx={{ m: 2, p: 2, width: "24em" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columns={{ xs: 6, md: 6 }}
        >
          <Grid item xs={2} md={2}>
            <DescriptionIcon sx={{ fontSize: 100 }} />
          </Grid>
          <Grid item xs={3} md={3}>
            <NoteElementInformation note={props.note} />
          </Grid>
          <Grid item xs={1}>
            <NoteElementButtoms note={props.note} />
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
}

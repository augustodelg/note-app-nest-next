import { Grid } from "@mui/material";
import { Fragment } from "react";
import { Note } from "interfaces/note.type";
import NoteElement from "./components/noteElement/NoteElement";

interface Props {
  notes: Note[];
}
export default function NotesList(props: Props) {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {props.notes.map((note) => (
          <NoteElement key={note.id} note={note} />
        ))}
      </Grid>
    </Fragment>
  );
}

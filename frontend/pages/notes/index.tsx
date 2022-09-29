import { Box } from "@mui/material";
import HttpClient from "utilities/HttpClient";
import { Button, Typography } from "@mui/material";
import { Note } from "interfaces/note.type";
import NotesList from "./components/notesList/NotesList";
import NoteService from "services/noteService";
import GenericModal from "components/generals/modal/GenericModal";
import NoteForm from "./components/noteForm/NoteForm";
import { useRouter } from "next/router";
import ConfirmDeleteForm from "./components/confirmDeleteForm/ConfirmDeleteForm";
import FilterNotes from "./components/filterNotes/FilterNotes";
import NotFoundNotes from "./components/notFoundNotes/NotFoundNotes";
import { Fragment } from "react";

interface Props {
  notes: Note[];
}

interface ServerSidePropsInterface {
  props: {
    notes: Note[];
  };
}
function Notes(props: Props) {
  const router = useRouter();
  const { create, noteId, remove } = router.query;
  return (
    <Fragment>
      {props.notes.length ? (
        <Box>
          <FilterNotes />
          <NotesList notes={props.notes} />
        </Box>
      ) : (
        <Box sx={{ m: 5 }}>
          <NotFoundNotes />
        </Box>
      )}
      {(create || noteId) && (
        <GenericModal>
          {remove ? <ConfirmDeleteForm /> : <NoteForm />}
        </GenericModal>
      )}
    </Fragment>
  );
}
export async function getServerSideProps(
  context: any
): Promise<ServerSidePropsInterface> {
  const archived: boolean = context.query.archived;
  const tagFilter: string = context.query.tagFilter;

  const notes = (await NoteService.getNotes(archived, tagFilter)) as Note[];

  return { props: { notes } };
}
export default Notes;

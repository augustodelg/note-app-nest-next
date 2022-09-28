import { Box } from "@mui/material";
import HttpClient from "utilities/HttpClient";
import { Note } from "interfaces/note.type";
import NotesList from "./components/notesList/NotesList";
import NoteService from "services/noteService";
import GenericModal from "components/generals/modal/GenericModal";
import NoteForm from "./components/noteForm/NoteForm";
import { useRouter } from "next/router";
import ConfirmDeleteForm from "./components/confirmDeleteForm/ConfirmDeleteForm";

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
    <Box>
      <NotesList notes={props.notes} />
      {(create || noteId) && (
        <GenericModal>{remove ? <ConfirmDeleteForm/> : <NoteForm />}</GenericModal>
      )}
    </Box>
  );
}
export async function getServerSideProps(
  context: any
): Promise<ServerSidePropsInterface> {
  const archived: boolean = context.query.archived;

  const notes = await NoteService.getNotes(archived) as Note[];

  return { props: { notes } };
}
export default Notes;

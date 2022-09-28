import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import useInput from "hooks/useInput";
import NoteService from "services/noteService";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { Note } from "interfaces/note.type";

interface Props {}
export default function NoteForm(props: Props) {
  const router = useRouter();
  const noteId = router.query.noteId as string;

  const [loading, setLoading] = useState<boolean>(false);

  const [title, titleInput, setTitle] = useInput<string>({
    label: "Title",
    extraOpt: {
      placeholder: "Title example",
      type: "text",
      sx: { pb: 2 },
    },
  });
  const [content, contentInput, setContent] = useInput<string>({
    label: "Content",
    extraOpt: {
      variant: "filled",
      multiline: true,
      rows: 16,
      placeholder: "Content example",
      sx: { height: "100%", width: "100%" },
    },
  });

  async function setEditNote() {
    const note = await NoteService.getNoteById(noteId) as Note;
    setTitle(note.title);
    setContent(note.content);
  }

  useEffect(() => {
    noteId && setEditNote();
  }, [noteId]);

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();
    setLoading(true);
    const noteData = {
      title: title,
      content: content,
    };
    const result = noteId
      ? await NoteService.updateNote(noteId, noteData, () => router.back())
      : await NoteService.createNote(noteData, () => router.back());

    setLoading(false);
  }

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ fontWeight: "bold", pb: 2 }}
        color="primary"
      >
        Create/Edit Note
      </Typography>
      <form onSubmit={(event) => handleSubmit(event)}>
        {titleInput}
        {contentInput}

        <LoadingButton
          sx={{ mt: 2, p: 1 }}
          loading={loading}
          color="primary"
          type="submit"
          variant="contained"
          size="large"
        >
          Save
        </LoadingButton>
      </form>
    </Box>
  );
}

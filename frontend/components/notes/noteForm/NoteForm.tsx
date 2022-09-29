import React, { FormEvent, FormEventHandler, useEffect, useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import useInput from "hooks/useInput";
import NoteService from "services/noteService";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { Note } from "interfaces/note.type";
import TagsSection from "./components/TagsSection";
import { Tag } from "interfaces/tag.type";

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
      minRows: 10,
      maxRows: 14,
      placeholder: "Content example",
      sx: { height: '50%', width: "100%" },
    },
  });

  const tagInput = useRef<Tag[]>([]);

  async function setEditNote() {
    const note = await NoteService.getNoteById(noteId) as Note;
    setTitle(note.title);
    setContent(note.content);
    
    tagInput.current = note.tags;
    
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
      tagsIds: (tagInput.current?tagInput.current: []).map((tag) => tag.id),
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
        <Box sx={{ pb: 2 }}>{titleInput}</Box>
        <Box sx={{ pb: 2 }}>{contentInput}</Box>
        <TagsSection refTags={tagInput}/>
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

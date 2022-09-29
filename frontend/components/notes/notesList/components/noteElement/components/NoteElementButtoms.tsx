import { Button, Grid } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import UnarchiveRoundedIcon from "@mui/icons-material/UnarchiveRounded";
import InventoryIcon from "@mui/icons-material/Inventory";
import Link from "next/link";
import NoteService from "services/noteService";
import { Note } from "interfaces/note.type";
import { APP_ROUTES } from "config/appRoutes";
import { toast } from "react-hot-toast";

interface Props {
    note: Note;
  }
export default function  NoteElementButtoms (props: Props) {
    async function toggleArchiveNote() {
        await NoteService.toggleNoteArchiveStatus(
          props.note.id,
          props.note.archived
        );
      }
  return (
    <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                sx={{ width: 1 }}
                onClick={() => toggleArchiveNote()}
              >
                {props.note.archived ? (
                  <UnarchiveRoundedIcon />
                ) : (
                  <InventoryIcon />
                )}
              </Button>
            </Grid>
            <Grid item>
              <Link href={APP_ROUTES.edit(props.note.archived,props.note.id)}>
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  sx={{ width: 1 }}
                >
                  <BorderColorRoundedIcon />
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                href={APP_ROUTES.delete(props.note.archived,props.note.id)}
              >
                <Button
                  variant="outlined"
                  color="warning"
                  size="small"
                  sx={{ width: 1 }}
                >
                  <DeleteRoundedIcon />
                </Button>
              </Link>
            </Grid>
          </Grid>
  )
};

import { Button, Grid, Modal, Paper } from "@mui/material";
import { Fragment, PropsWithChildren, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
interface Props {
  textButtom?: string;
  children: any;
}
export default function GenericModal(props: PropsWithChildren<Props>) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    router.back();
  };
  return (
    <Fragment>
      {props.textButtom && (
        <Button
          onClick={handleOpen}
          variant="contained"
          color="primary"
          size="large"
        >
          {props.textButtom}
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: "absolute",
            width: "80vw",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Grid container direction="column" justifyContent="center">
            <Grid item>
              <Button
                onClick={handleClose}
                variant="outlined"
                color="warning"
                sx={{ width: 2, position: "absolute", top: 10, right: 10 }}
              >
                <CloseIcon />
              </Button>
            </Grid>
            <Grid item>{props.children}</Grid>
          </Grid>
        </Paper>
      </Modal>
    </Fragment>
  );
}

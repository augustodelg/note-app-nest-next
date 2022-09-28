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
        sx={{ overflow: "scroll" }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            p: 4,
            position: "absolute",
            width: "80vw",
            left: "50",
            right: "50",
            margin: "auto",
            boxShadow: 24,
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

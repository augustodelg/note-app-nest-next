import { Box } from "@mui/material";
import { Fragment, PropsWithChildren } from "react";
import Navbar from "./components/navbar/Navbar";

export default function Layout(props: PropsWithChildren<any>) {
  return (
    <Fragment>
      <Navbar />
      <Box sx={{ pt: 15 }}>{props.children}</Box>
    </Fragment>
  );
}

import { Fragment } from "react";

interface Props {
    option: JSX.Element[];
}
export default function  NavbarOptions (props: Props) {
  return (
    <Fragment>
       {props.option.map((element) => element)}
    </Fragment>
  )
};

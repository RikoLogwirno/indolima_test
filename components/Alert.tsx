import { Box } from "@material-ui/core";
import { ReactElement } from "react";

type Severity = "info" | "error" | "success";

export interface AlertProps {
  children: ReactElement | string;
  severity?: Severity;
  show?: boolean;
}

export default function Alert(props: AlertProps) {
  return (
    <Box className={`alert-cont ${props.severity} ${props.show && 'show'}`}>
      {props.children}
    </Box>
  );
}
import { CircularProgress } from "@mui/material";

import classes from "./loading_spinner.module.css";
import { CSSProperties } from "react";
export default function LoadingSpinner({
  label,
  style,
  size = 20,
}: {
  label?: string;
  style?: CSSProperties;
  size?: number;
}) {
  return (
    <div className={classes.container} style={style}>
      <CircularProgress color="success" size={size} />
      <span>{label}</span>
    </div>
  );
}

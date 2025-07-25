import { cn } from "@/utils";
import classes from "./button.module.css";
import { ButtonProps, Button as MUIButton } from "@mui/material";

export default function Button(props: ButtonProps) {
  return (
    <MUIButton
      {...props}
      variant={props.variant || "contained"}
      className={cn(classes.btn, props.className)}
    />
  );
}

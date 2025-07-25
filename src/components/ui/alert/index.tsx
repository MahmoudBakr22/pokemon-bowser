import { Alert as MUIAlert } from "@mui/material";

export default function Alert({ label }: { label: string }) {
  return (
    <MUIAlert severity="error" variant="filled">
      {label}
    </MUIAlert>
  );
}

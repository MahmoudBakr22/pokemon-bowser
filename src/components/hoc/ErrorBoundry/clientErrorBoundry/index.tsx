import { Alert } from "@mui/material";

import classes from "./clientErrorBoundry.module.css";

export default function ClientErrorBoundry({ reset }: { reset: () => void }) {
  return (
    <div onClick={reset} className={classes.container}>
      <Alert severity="error" className={classes.alert}>
        This Page is currently under maintainance
      </Alert>
    </div>
  );
}

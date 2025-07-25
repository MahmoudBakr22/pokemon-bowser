import Alert from "@/components/ui/alert";

import classes from "./pokemon_list_error.module.css";
import { Button } from "@mui/material";

export default function PokemonListError({ refetch }: { refetch: () => void }) {
  return (
    <div className={classes.container}>
      <Alert label="OOPs, we could not get your dragons!" />
      <Button
        variant="contained"
        color="info"
        onClick={refetch}
        style={{ marginInline: "auto", marginTop: 50 }}
      >
        Try Again
      </Button>
    </div>
  );
}

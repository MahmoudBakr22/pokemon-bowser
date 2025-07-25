import { CiRuler } from "react-icons/ci";
import { LuWeight } from "react-icons/lu";

import classes from "./pokemon_info.module.css";

export default function PokemonInfo({ weight, height }: { weight: number; height: number }) {
  const roundedHeight = Math.round(height * 10) / 100;
  const roundedWeight = Math.round(weight * 10) / 100;
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.label}>
          <CiRuler className={classes.icon} />
          height
        </div>
        <div className={classes.value}>{roundedHeight} m</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.label}>
          <LuWeight className={classes.icon} />
          weight
        </div>
        <div className={classes.value}>{roundedWeight} kg</div>
      </div>
    </div>
  );
}

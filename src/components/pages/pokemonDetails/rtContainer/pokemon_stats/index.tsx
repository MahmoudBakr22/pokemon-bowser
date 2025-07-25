import { LinearProgress } from "@mui/material";

import { TypohraphyH4 } from "@/components/ui/typography";

import classes from "./pokemon_stats.module.css";

import { PokemonDetailsType } from "@/api/pokemon/types";

export default function PokemonStats({ stats }: { stats: PokemonDetailsType["stats"] }) {
  const formatStatName = (sName: string) => {
    let statName = sName;
    if (statName.length <= 2) {
      statName = statName.toUpperCase();
    }

    if (statName.includes("special")) {
      statName = statName.replace("special-", "Sp.");
    }
    return statName;
  };
  return (
    <div className={classes.container}>
      <TypohraphyH4 style={{ fontWeight: 900 }}>Base Stats</TypohraphyH4>
      <div className={classes.statsContainer}>
        {stats.map(({ base_stat, stat }) => (
          <div key={stat.name} className={classes.statContainer}>
            <div className={classes.labelContainer}>
              <span className={classes.statName}>{formatStatName(stat.name)}</span>
              <span className={classes.statValue}>{base_stat}</span>
            </div>
            <div>
              <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={base_stat}
                color="inherit"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

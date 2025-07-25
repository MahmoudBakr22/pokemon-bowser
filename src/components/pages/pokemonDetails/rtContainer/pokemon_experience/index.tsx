import { TypohraphyH4 } from "@/components/ui/typography";

import { PokemonDetailsType } from "@/api/pokemon/types";

import classes from "./pokemon_experience.module.css";

export default function PokemonExperience({
  experience,
}: {
  experience: PokemonDetailsType["base_experience"];
}) {
  return (
    <div className={classes.container}>
      <TypohraphyH4 style={{ fontWeight: 900 }}>Base Experience</TypohraphyH4>
      <div className={classes.exp}>{experience} XP</div>
    </div>
  );
}

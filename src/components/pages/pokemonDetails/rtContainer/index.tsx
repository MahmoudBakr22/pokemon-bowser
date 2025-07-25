import { PokemonDetailsType } from "@/api/pokemon/types";
import classes from "./rtContainer.module.css";
import PokemonStats from "./pokemon_stats";
import PokemonAbilities from "./pokemon_abilities";
import PokemonExperience from "./pokemon_experience";

export default function RtContainer({ details }: { details: PokemonDetailsType }) {
  return (
    <div className={classes.container}>
      <PokemonStats stats={details["stats"]} />
      <PokemonAbilities abilities={details["abilities"]} />
      <PokemonExperience experience={details["base_experience"]} />
    </div>
  );
}

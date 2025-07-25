import { PokemonDetailsType } from "@/api/pokemon/types";
import classes from "./ltConainer.module.css";
import PokemonImage from "./pokemon_image";
import PokemonTypes from "./pokemonTypes";
import PokemonInfo from "./pokemon_info";

export default function LtConainer({ details }: { details: PokemonDetailsType }) {
  return (
    <div className={classes.container}>
      <PokemonImage sprites={details.sprites} />
      <PokemonTypes types={details["types"]} />
      <PokemonInfo weight={details["weight"]} height={details["height"]} />
    </div>
  );
}

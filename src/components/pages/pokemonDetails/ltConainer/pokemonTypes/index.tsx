import { PokemonDetailsType } from "@/api/pokemon/types";
import classes from "./pokemonTypes.module.css";

export default function PokemonTypes({ types }: { types: PokemonDetailsType["types"] }) {
  return (
    <div className={classes.container}>
      {types.map(({ type }) => (
        <span key={type.name} className={classes.type}>
          {type.name}
        </span>
      ))}
    </div>
  );
}

import PokemonCard from "./pokemon_card";

import classes from "./pokemon_list.module.css";

import { PokemonListType } from "@/api/pokemon/types";

export default function PokemonList({ pokemonListData }: { pokemonListData: PokemonListType }) {
  return (
    <div className={classes.container}>
      {pokemonListData.results.map((pokemonDetails) => (
        <PokemonCard key={pokemonDetails.name} pokemon={pokemonDetails} />
      ))}
    </div>
  );
}

"use client";

import InfinitePokemonList from "./infinite_pokemon_list";
import { PokemonListType } from "@/api/pokemon/types";
import PaginatedPokemonList from "./paginated_pokemon_list";
import { usePokemonNavigationContext } from "@/contexts/pokemonNavigationContext";

export default function PokemonListManger({
  pokemonListData,
}: {
  pokemonListData: PokemonListType | undefined;
}) {
  const { navigationType } = usePokemonNavigationContext();

  if (navigationType === "pagination") {
    return <PaginatedPokemonList {...{ pokemonListData }} />;
  } else if (navigationType === "infinite_scroll") {
    return <InfinitePokemonList {...{ pokemonListData }} />;
  }
}

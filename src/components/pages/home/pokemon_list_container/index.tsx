import { getPokemonList } from "@/api/pokemon";

import PokemonListManger from "./pokemon_list_manger";
import { POKEMONS_PER_PAGE } from "./contants";

export default async function PokemonListContainer() {
  const pokemonListData = await getPokemonList(
    { limit: POKEMONS_PER_PAGE, pageParam: 0 },
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  ).catch(() => {
    // return undefined if fetch failed to avoid page crash and
    return undefined;
  });
  return <PokemonListManger {...{ pokemonListData }} />;
}

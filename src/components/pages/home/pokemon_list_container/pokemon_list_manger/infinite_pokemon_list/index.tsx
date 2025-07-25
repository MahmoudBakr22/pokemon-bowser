import useInfinitePokemonList from "./hooks/use_infinite_pokemon_list";

import PokemonList from "../pokemon_list";
import PokemonListSekeleton from "../pokemon_list/sekeleton";

import { PokemonListType } from "@/api/pokemon/types";
import { POKEMONS_PER_PAGE } from "../../contants";
import PokemonListError from "../pokemon_list_error";
import LoadMoreButton from "./load_more";
import { TypohraphyP } from "@/components/ui/typography";

export default function InfinitePokemonList({
  pokemonListData,
}: {
  pokemonListData: PokemonListType | undefined;
}) {
  const { aggregatedResult, isError, hasNextPage, fetchNextPage, isFetching, refetch } =
    useInfinitePokemonList({
      initialPokemonData: pokemonListData,
    });

  if (isError) {
    return <PokemonListError refetch={refetch} />;
  }

  if (aggregatedResult?.count <= 0) {
    return <PokemonListSekeleton size={POKEMONS_PER_PAGE} />;
  }

  return (
    <div>
      <PokemonList {...{ pokemonListData: aggregatedResult }} />
      {hasNextPage && <LoadMoreButton isFetching={isFetching} fetchNextPage={fetchNextPage} />}
      <TypohraphyP style={{ textAlign: "center", color: "#333" }}>
        Showing {aggregatedResult.results.length} Pokemon
      </TypohraphyP>
      {/* {hasNextPage && (
        <div ref={setObservedElement} style={{ marginTop: 25 }}>
          <PokemonListSekeleton size={2} />
        </div>
      )} */}
    </div>
  );
}

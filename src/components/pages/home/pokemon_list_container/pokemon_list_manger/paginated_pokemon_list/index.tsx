import { useRef } from "react";

import usePaginatedPokemonList from "./hooks/use_paginated_pokemon_list";

import { TypohraphyP } from "@/components/ui/typography";
import Pagination from "@/components/ui/pagination";
import PokemonListSekeleton from "../pokemon_list/sekeleton";
import PokemonList from "../pokemon_list";
import PokemonListError from "../pokemon_list_error";

import classes from "./paginated_pokemon_list.module.css";

import { PokemonListType } from "@/api/pokemon/types";

export default function PaginatedPokemonList({
  pokemonListData,
}: {
  pokemonListData: PokemonListType | undefined;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { result, changePage, isFetching, isError, pageCount, page, refetch } =
    usePaginatedPokemonList({
      initialPokemonData: pokemonListData,
      containerRef,
    });

  if (isError) {
    return <PokemonListError refetch={refetch} />;
  }

  if (isFetching || !result) {
    return <PokemonListSekeleton />;
  }

  const pokemonsShown = result.results.length;
  return (
    <div ref={containerRef} style={{ scrollMarginTop: 20 }}>
      <PokemonList pokemonListData={result} />
      <Pagination
        className={classes.pagination}
        count={pageCount}
        onPageChange={changePage}
        page={page}
      />
      <TypohraphyP className={classes.paginationStatus}>
        Page {page} of {pageCount} ({pokemonsShown} Pokemon shown)
      </TypohraphyP>
    </div>
  );
}

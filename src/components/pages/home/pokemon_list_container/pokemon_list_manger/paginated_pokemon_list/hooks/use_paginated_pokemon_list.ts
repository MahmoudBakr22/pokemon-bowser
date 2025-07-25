import { getPokemonList } from "@/api/pokemon";
import { PokemonListType } from "@/api/pokemon/types";
import { useQuery } from "@tanstack/react-query";
import { RefObject, useState } from "react";
import { POKEMONS_PER_PAGE } from "../../../contants";

export default function usePaginatedPokemonList({
  initialPokemonData,
  containerRef,
}: {
  initialPokemonData: PokemonListType | undefined;
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const [page, setPage] = useState(1);
  const { data, isError, isFetching, refetch } = useQuery({
    queryKey: ["paginated_pokemon_list", page],
    queryFn: () => {
      return getPokemonList({ pageParam: page - 1 });
    },
    staleTime: Infinity,
    initialData: page === 1 ? initialPokemonData : undefined,
  });

  const pageCount = initialPokemonData?.count
    ? Math.ceil(initialPokemonData.count / POKEMONS_PER_PAGE)
    : 0;

  const changePage = (p: number) => {
    setPage(p);
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    result: data,
    isError,
    isFetching,
    pageCount,
    page,
    changePage,
    refetch,
  };
}

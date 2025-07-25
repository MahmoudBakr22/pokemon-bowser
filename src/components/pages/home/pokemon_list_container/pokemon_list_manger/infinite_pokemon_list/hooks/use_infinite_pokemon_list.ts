import { getPokemonList } from "@/api/pokemon";
import { PokemonListType } from "@/api/pokemon/types";
import { useIntersectionObserver } from "@/hooks/use_intersection_observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { mergeAllResults } from "../utils";

export default function useInfinitePokemonList({
  initialPokemonData,
}: {
  initialPokemonData: PokemonListType | undefined;
}) {
  const { setObservedElement } = useIntersectionObserver({});

  const { data, isError, fetchNextPage, hasNextPage, refetch, isFetching } = useInfiniteQuery({
    queryKey: ["pokemon_list_infinite"],
    queryFn: getPokemonList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      if (lastPage.next) {
        return lastPageParam + 1;
      }
    },
    initialData: initialPokemonData ? { pageParams: [0], pages: [initialPokemonData] } : undefined,
    staleTime: Infinity,
  });

  // useEffect(() => {
  //   if (isIntersecting) {
  //     fetchNextPage();
  //   }
  // }, [fetchNextPage, isIntersecting]);

  const aggregatedResult = mergeAllResults(data?.pages);

  return {
    aggregatedResult,
    setObservedElement,
    hasNextPage,
    isError,
    refetch,
    isFetching,
    fetchNextPage,
  };
}

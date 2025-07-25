import { PokemonListType } from "@/api/pokemon/types";

export const mergeAllResults = (data: PokemonListType[] | undefined) => {
  if (!data) {
    return { count: 0, results: [], next: null };
  }

  const aggregatedResult = data.reduce<PokemonListType>(
    (prev, current) => {
      const count = prev.count + current.count;
      const results = [...prev.results, ...current.results];
      const next = current.next;
      return { count, results, next };
    },
    { count: 0, results: [], next: null }
  );

  return aggregatedResult;
};

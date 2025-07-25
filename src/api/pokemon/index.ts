import { ALL_POKEMONS_EB, BASE_URL, FORM_POKEMON_Details_EB } from "./constants";
import { PokemonDetailsType, PokemonListType } from "./types";

export const getPokemonList = async (
  {
    pageParam = 0,
    limit = 20,
  }: {
    pageParam?: number;
    limit?: number;
  },
  options?: RequestInit
): Promise<PokemonListType> => {
  const offset = pageParam * limit;
  const data = await fetch(
    `${BASE_URL}/${ALL_POKEMONS_EB}?limit=${limit}&offset=${offset}`,
    options
  );
  const pokemonList = await data.json();

  // to test Next JS ISR Caching
  // await delay();

  return pokemonList;
};

export const getPokemonDetails = async ({ id }: { id: string }): Promise<PokemonDetailsType> => {
  // console.time to test fetch Api Caching
  // console.time("First Fetch");
  const data = await fetch(`${BASE_URL}/${FORM_POKEMON_Details_EB(id)}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60,
    },
  });
  // console.timeEnd("First Fetch");
  const pokemonDetails = await data.json();
  return pokemonDetails;
};

// const delay = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("");
//     }, 10000);
//   });

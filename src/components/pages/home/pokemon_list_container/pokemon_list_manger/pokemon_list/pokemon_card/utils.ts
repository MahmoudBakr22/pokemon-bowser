export const extractPokemonId = (pokemonUrl: string) => {
  const match = pokemonUrl.match(/(\d+)\/?$/);
  const id = match ? match[1] : "";

  return id;
};
export const formPokemonImg = (pokemonId: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};

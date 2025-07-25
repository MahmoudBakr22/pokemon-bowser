export type PokemonListType = {
  count: number;
  results: PokemonType[];
  next: string | null;
};

export type PokemonType = { name: string; url: string };

export type PokemonDetailsType = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  height: number;
  id: number;
  is_default: true;
  name: string;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];

  weight: number;
};

import Image from "next/image";

import { extractPokemonId, formPokemonImg } from "./utils";

import classes from "./pokemon_card.module.css";

import { PokemonType } from "@/api/pokemon/types";
import Link from "next/link";

export default function PokemonCard({ pokemon }: { pokemon: PokemonType }) {
  const pokemonId = extractPokemonId(pokemon.url);
  const pokemonImg = formPokemonImg(pokemonId);

  return (
    <Link className={classes.container} href={"/pokemon/" + pokemonId}>
      <div className={classes.imgContainer}>
        <Image className={classes.img} src={pokemonImg} alt={pokemon.name} width={96} height={96} />
      </div>
      <div className={classes.name}>{pokemon.name}</div>
      <div className={classes.id}>#{pokemonId.padStart(3, "0")}</div>
    </Link>
  );
}

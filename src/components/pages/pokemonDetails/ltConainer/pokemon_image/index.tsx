import { PokemonDetailsType } from "@/api/pokemon/types";
import classes from "./pokemon_image.module.css";
import Image from "next/image";

export default function PokemonImage({ sprites }: { sprites: PokemonDetailsType["sprites"] }) {
  return (
    <div className={classes.container}>
      <Image className={classes.img} src={sprites.front_shiny} alt="" width={96} height={96} />
    </div>
  );
}

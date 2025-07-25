import Skeleton from "@/components/ui/skeleton";
import classes from "../pokemon_list.module.css";
import { POKEMONS_PER_PAGE } from "../../../contants";

export default function PokemonListSekeleton({ size = POKEMONS_PER_PAGE }: { size?: number }) {
  return (
    <div className={classes.container}>
      {Array.from({ length: size }).map((_, i) => (
        <div key={i} className={classes.cardSkeleton}>
          <Skeleton style={{ height: 200, borderRadius: 5, marginBottom: 10 }} />
          <Skeleton style={{ height: 15, width: "60%" }} />
          <Skeleton style={{ height: 10, width: "45%" }} />
        </div>
      ))}
    </div>
  );
}

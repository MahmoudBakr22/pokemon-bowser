import { Suspense } from "react";

import { PokemonNavigationProvider } from "@/contexts/pokemonNavigationContext";

import HomeHeader from "@/components/pages/home/header";
import PokemonListSekeleton from "@/components/pages/home/pokemon_list_container/pokemon_list_manger/pokemon_list/sekeleton";
import PokemonListContainer from "@/components/pages/home/pokemon_list_container";

import classes from "./page.module.css";

export default async function HomePage() {
  return (
    <PokemonNavigationProvider>
      <div className={classes.container}>
        <HomeHeader />
        <Suspense fallback={<PokemonListSekeleton />}>
          <PokemonListContainer />
        </Suspense>
      </div>
    </PokemonNavigationProvider>
  );
}

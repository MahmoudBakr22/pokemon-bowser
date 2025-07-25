"use client";

import { RxLightningBolt } from "react-icons/rx";

import classes from "./header.module.css";
import { TypohraphyH1, TypohraphyP } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import {
  PokemonNavigationType,
  usePokemonNavigationContext,
} from "@/contexts/pokemonNavigationContext";

const navigationLabel: Record<PokemonNavigationType, string> = {
  infinite_scroll: "Discover and explore Pokemon with infinite scroll",
  pagination: "Discover and explore Pokemon with page contols",
};

export default function HomeHeader() {
  const { navigationType, setNavigationType } = usePokemonNavigationContext();

  const activatePaginationNavigation = () => {
    setNavigationType("pagination");
  };

  const activateInfiniteScrollNavigation = () => {
    setNavigationType("infinite_scroll");
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerLabelContainer}>
        <RxLightningBolt size={28} color="#d3bb34" />
        <TypohraphyH1>Pokédex</TypohraphyH1>
      </div>
      <TypohraphyP>{navigationLabel[navigationType]}</TypohraphyP>
      <div className={classes.btnsContainer}>
        <Button onClick={activatePaginationNavigation} className={classes.light}>
          Page Controls
        </Button>
        <Button onClick={activateInfiniteScrollNavigation} className={classes.dark}>
          Infinite Scroll
        </Button>
      </div>
    </div>
  );
}

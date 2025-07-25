"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type PokemonNavigationType = "pagination" | "infinite_scroll";
export type PokemonNavigationContextType = {
  navigationType: PokemonNavigationType;
  setNavigationType: Dispatch<SetStateAction<PokemonNavigationType>>;
};

const PokemonNavigationContext = createContext<PokemonNavigationContextType | null>(null);

export function PokemonNavigationProvider({ children }: { children: ReactNode }) {
  const [navigationType, setNavigationType] = useState<PokemonNavigationType>("pagination");
  const isPaginationNavigation = navigationType === "pagination";

  const formPageBackgroundStyle = () => {
    if (isPaginationNavigation) {
      return { backgroundColor: "#e4e9fd" };
    } else {
      return { backgroundColor: "#bae0ca" };
    }
  };
  return (
    <PokemonNavigationContext.Provider
      value={{
        navigationType,
        setNavigationType,
      }}
    >
      <div style={formPageBackgroundStyle()}>{children}</div>
    </PokemonNavigationContext.Provider>
  );
}

export function usePokemonNavigationContext() {
  const context = useContext(PokemonNavigationContext)!;

  if (!context) {
    throw new Error(
      "usePokemonNavigationContext must be used inside a PokemonNavigationContext Provider"
    );
  }

  return context;
}

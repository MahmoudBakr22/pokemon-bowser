import { Metadata } from "next";

import { getPokemonDetails } from "@/api/pokemon";
import PokemonDetails from "@/components/pages/pokemonDetails";

export default async function PokemonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: pokemonId } = await params;
  const pokemonDetails = await getPokemonDetails({ id: pokemonId });
  return <PokemonDetails details={pokemonDetails} />;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id: pokemonId } = await params;
  const pokemonDetails = await getPokemonDetails({ id: pokemonId });

  return {
    title: `${pokemonDetails.name} Dragon`,
    description: `See Information about ${pokemonDetails.name} Dragon`,
  };
}

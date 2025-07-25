import { getPokemonDetails } from "@/api/pokemon";
import PokemonDetails from "@/components/pages/pokemonDetails";

export default async function PokemonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: pokemonId } = await params;
  const pokemonDetails = await getPokemonDetails({ id: pokemonId });
  return <PokemonDetails details={pokemonDetails} />;
}

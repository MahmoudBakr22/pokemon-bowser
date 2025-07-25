import { PokemonDetailsType } from "@/api/pokemon/types";
import classes from "./pokemon_abilities.module.css";
import { TypohraphyH4 } from "@/components/ui/typography";

export default function PokemonAbilities({
  abilities,
}: {
  abilities: PokemonDetailsType["abilities"];
}) {
  const formatAbilityName = (abilityName: string) => {
    return abilityName.replace("-", " ");
  };
  return (
    <div className={classes.container}>
      <TypohraphyH4 style={{ fontWeight: 900 }}>Abilities</TypohraphyH4>
      <div className={classes.abilitiesContainer}>
        {abilities.map(({ ability, is_hidden }) => (
          <div key={ability.name} className={classes.ability}>
            <span
              className={classes.abilityName}
              style={is_hidden ? { backgroundColor: "#f6f7f9" } : {}}
            >
              {formatAbilityName(ability.name)}
            </span>
            {is_hidden && <span className={classes.hidden}>(Hidden)</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

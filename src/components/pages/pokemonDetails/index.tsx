import { PokemonDetailsType } from "@/api/pokemon/types";
import PokemonHeader from "./header";
import LtConainer from "./ltConainer";
import classes from "./pokemonDetails.module.css";
import RtContainer from "./rtContainer";
import BackToHome from "./back_to_home";

export default function PokemonDetails({ details }: { details: PokemonDetailsType }) {
  return (
    <div className={classes.container}>
      <BackToHome />
      <div className={classes.innerContainer}>
        <PokemonHeader name={details.name} id={details.id} />
        <div className={classes.infoContainer}>
          <LtConainer {...{ details }} />
          <RtContainer {...{ details }} />
        </div>
      </div>
    </div>
  );
}

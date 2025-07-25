import { RxLightningBolt } from "react-icons/rx";
import classes from "./header.module.css";
import { TypohraphyH2 } from "@/components/ui/typography";

export default function PokemonHeader({ name, id }: { name: string; id: number }) {
  return (
    <div className={classes.container}>
      <div className={classes.headerLabelContainer}>
        <RxLightningBolt size={24} color="#fff" />
        <TypohraphyH2 style={{ color: "#fff" }}>{name}</TypohraphyH2>
      </div>
      <div>#{String(id).padStart(3, "0")}</div>
    </div>
  );
}

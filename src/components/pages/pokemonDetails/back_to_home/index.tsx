import Button from "@/components/ui/button";
import { RiArrowLeftLine } from "react-icons/ri";

import classes from "./back_to_home.module.css";
import Link from "next/link";

export default function BackToHome() {
  return (
    <div className={classes.container}>
      <Button
        component={Link}
        href="/"
        className={classes.btn}
        startIcon={<RiArrowLeftLine size={18} />}
        color="inherit"
      >
        Back To List
      </Button>
    </div>
  );
}

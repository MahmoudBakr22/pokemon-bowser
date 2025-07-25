import { ComponentProps } from "react";
import classes from "./typography.module.css";
import { cn } from "@/utils";

export function TypohraphyH1(props: ComponentProps<"h1">) {
  return <h1 className={cn(classes.h1, props.className)} {...props} />;
}
export function TypohraphyH2(props: ComponentProps<"h2">) {
  return <h2 className={cn(classes.h2, props.className)} {...props} />;
}
export function TypohraphyH3(props: ComponentProps<"h3">) {
  return <h3 className={cn(classes.h3, props.className)} {...props} />;
}
export function TypohraphyH4(props: ComponentProps<"h3">) {
  return <h3 className={cn(classes.h4, props.className)} {...props} />;
}
export function TypohraphyP(props: ComponentProps<"p">) {
  return <p className={cn(classes.p, props.className)} {...props} />;
}

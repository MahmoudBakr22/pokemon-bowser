import { CSSProperties } from "react";
import { cn } from "@/utils";

import classes from "./skeleton.module.css";

export default function Skeleton({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return <div className={cn(classes.container, className)} style={style} />;
}

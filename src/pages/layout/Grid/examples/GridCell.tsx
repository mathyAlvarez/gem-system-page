import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import "./grid-demo.css";

type GridCellProps = HTMLAttributes<HTMLDivElement> & { accent?: boolean; tall?: boolean };

export function GridCell({ accent = false, tall = false, className, ...props }: GridCellProps) {
  return (
    <div className={cn("grid-cell", accent && "grid-cell--accent", tall && "grid-cell--tall", className)} {...props} />
  );
}

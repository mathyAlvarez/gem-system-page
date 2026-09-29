import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import "./flex-demo.css";

type FlexItemProps = HTMLAttributes<HTMLDivElement> & { accent?: boolean; tall?: boolean };

export function FlexItem({ accent = false, tall = false, className, ...props }: FlexItemProps) {
  return (
    <div className={cn("flex-item", accent && "flex-item--accent", tall && "flex-item--tall", className)} {...props} />
  );
}

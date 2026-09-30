import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import "./fab-demo.css";

type FabStageProps = { children: ReactNode; tall?: boolean; hint?: string; className?: string };

export function FabStage({ children, tall = false, hint, className }: FabStageProps) {
  return (
    <div className={cn("fab-stage", tall && "fab-stage--tall", className)}>
      {hint ? <p className="fab-stage__hint">{hint}</p> : null}
      {children}
    </div>
  );
}

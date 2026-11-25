import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import "./magnetic-demo.css";

type MagneticTileProps = {
  label?: string;
  /** Extra padding so a `radius` field fits inside the stage. */
  field?: boolean;
  children: ReactNode;
};

/** Dark stage so the demos read the same in light and dark themes. */
export function MagneticTile({ label, field = false, children }: MagneticTileProps) {
  return (
    <div className="magnetic-demo__item">
      {label ? <p className="magnetic-demo__label">{label}</p> : null}
      <div className={cn("magnetic-demo__stage", field && "magnetic-demo__stage--field")}>
        {children}
      </div>
    </div>
  );
}

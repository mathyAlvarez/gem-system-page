import type { ReactNode } from "react";
import "./vortex-demo.css";

type VortexTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the overlay blend reads the same in light and dark themes. */
export function VortexTile({ label, children }: VortexTileProps) {
  return (
    <div className="vortex-demo__item">
      {label ? <p className="vortex-demo__label">{label}</p> : null}
      <div className="vortex-demo__stage">{children}</div>
    </div>
  );
}

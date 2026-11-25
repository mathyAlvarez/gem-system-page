import type { ReactNode } from "react";
import "./glow-demo.css";

type GlowTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the halo reads the same in light and dark themes. */
export function GlowTile({ label, children }: GlowTileProps) {
  return (
    <div className="glow-demo__item">
      {label ? <p className="glow-demo__label">{label}</p> : null}
      <div className="glow-demo__stage">{children}</div>
    </div>
  );
}

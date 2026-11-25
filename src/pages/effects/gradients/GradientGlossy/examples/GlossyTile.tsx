import type { ReactNode } from "react";
import "./gradient-glossy-demo.css";

type GlossyTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the gloss reads the same in both themes. */
export function GlossyTile({ label, children }: GlossyTileProps) {
  return (
    <div className="gg-demo__item">
      {label ? <p className="gg-demo__label">{label}</p> : null}
      <div className="gg-demo__stage">{children}</div>
    </div>
  );
}

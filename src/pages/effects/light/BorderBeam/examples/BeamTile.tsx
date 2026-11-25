import type { ReactNode } from "react";
import "./border-beam-demo.css";

type BeamTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the beam reads the same in light and dark themes. */
export function BeamTile({ label, children }: BeamTileProps) {
  return (
    <div className="border-beam-demo__item">
      {label ? <p className="border-beam-demo__label">{label}</p> : null}
      <div className="border-beam-demo__stage">{children}</div>
    </div>
  );
}

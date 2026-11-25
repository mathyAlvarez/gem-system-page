import type { ReactNode } from "react";
import "./spotlight-demo.css";

type SpotlightTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the beam reads the same in light and dark themes. */
export function SpotlightTile({ label, children }: SpotlightTileProps) {
  return (
    <div className="spotlight-demo__item">
      {label ? <p className="spotlight-demo__label">{label}</p> : null}
      <div className="spotlight-demo__stage">{children}</div>
    </div>
  );
}

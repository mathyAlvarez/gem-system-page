import type { ReactNode } from "react";
import "./flicker-demo.css";

type FlickerTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the neon reads the same in light and dark themes. */
export function FlickerTile({ label, children }: FlickerTileProps) {
  return (
    <div className="flicker-demo__item">
      {label ? <p className="flicker-demo__label">{label}</p> : null}
      <div className="flicker-demo__stage">{children}</div>
    </div>
  );
}

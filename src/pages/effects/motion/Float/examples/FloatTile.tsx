import type { ReactNode } from "react";
import "./float-demo.css";

type FloatTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the motion and its shadow read the same in light and dark themes. */
export function FloatTile({ label, children }: FloatTileProps) {
  return (
    <div className="float-demo__item">
      {label ? <p className="float-demo__label">{label}</p> : null}
      <div className="float-demo__stage">{children}</div>
    </div>
  );
}

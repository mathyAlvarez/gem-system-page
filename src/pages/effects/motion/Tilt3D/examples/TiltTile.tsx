import type { ReactNode } from "react";
import "./tilt-3d-demo.css";

type TiltTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the tilt and its glare read the same in light and dark themes. */
export function TiltTile({ label, children }: TiltTileProps) {
  return (
    <div className="tilt-demo__item">
      {label ? <p className="tilt-demo__label">{label}</p> : null}
      <div className="tilt-demo__stage">{children}</div>
    </div>
  );
}

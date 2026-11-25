import type { ReactNode } from "react";
import "./gradient-mesh-demo.css";

type MeshTileProps = {
  label?: string;
  children: ReactNode;
};

export function MeshTile({ label, children }: MeshTileProps) {
  return (
    <div className="gm-demo__item">
      {label ? <p className="gm-demo__label">{label}</p> : null}
      <div className="gm-demo__stage">{children}</div>
    </div>
  );
}

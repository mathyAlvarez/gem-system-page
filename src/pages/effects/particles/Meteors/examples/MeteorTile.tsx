import type { ReactNode } from "react";
import "./meteors-demo.css";

type MeteorTileProps = {
  label?: string;
  children: ReactNode;
};

export function MeteorTile({ label, children }: MeteorTileProps) {
  return (
    <div className="mt-demo__item">
      {label ? <p className="mt-demo__label">{label}</p> : null}
      {children}
    </div>
  );
}

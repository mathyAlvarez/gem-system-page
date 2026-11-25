import type { ReactNode } from "react";
import "./particle-burst-demo.css";

type BurstTileProps = {
  label?: string;
  children: ReactNode;
};

export function BurstTile({ label, children }: BurstTileProps) {
  return (
    <div className="pb-demo__item">
      {label ? <p className="pb-demo__label">{label}</p> : null}
      {children}
    </div>
  );
}

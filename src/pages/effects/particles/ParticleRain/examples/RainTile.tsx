import type { ReactNode } from "react";
import "./particle-rain-demo.css";

type RainTileProps = {
  label?: string;
  children: ReactNode;
};

export function RainTile({ label, children }: RainTileProps) {
  return (
    <div className="pr-demo__item">
      {label ? <p className="pr-demo__label">{label}</p> : null}
      {children}
    </div>
  );
}

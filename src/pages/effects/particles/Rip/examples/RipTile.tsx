import type { ReactNode } from "react";
import "./rip-demo.css";

type RipTileProps = {
  label?: string;
  children: ReactNode;
};

export function RipTile({ label, children }: RipTileProps) {
  return (
    <div className="rp-demo__item">
      {label ? <p className="rp-demo__label">{label}</p> : null}
      <div className="rp-demo__stage rp-demo__stage--sm">{children}</div>
    </div>
  );
}

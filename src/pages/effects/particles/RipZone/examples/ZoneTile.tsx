import type { ReactNode } from "react";
import "./rip-zone-demo.css";

type ZoneTileProps = {
  label?: string;
  children: ReactNode;
};

export function ZoneTile({ label, children }: ZoneTileProps) {
  return (
    <div className="rz-demo__item">
      {label ? <p className="rz-demo__label">{label}</p> : null}
      {children}
    </div>
  );
}

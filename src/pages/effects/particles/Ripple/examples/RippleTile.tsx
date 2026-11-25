import type { ReactNode } from "react";
import "./ripple-demo.css";

type RippleTileProps = {
  label?: string;
  children: ReactNode;
};

export function RippleTile({ label, children }: RippleTileProps) {
  return (
    <div className="rl-demo__item">
      {label ? <p className="rl-demo__label">{label}</p> : null}
      {children}
    </div>
  );
}

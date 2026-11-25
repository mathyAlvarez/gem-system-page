import type { ReactNode } from "react";
import "./pulse-scale-demo.css";

type PulseTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the pulse and its ring read the same in light and dark themes. */
export function PulseTile({ label, children }: PulseTileProps) {
  return (
    <div className="pulse-demo__item">
      {label ? <p className="pulse-demo__label">{label}</p> : null}
      <div className="pulse-demo__stage">{children}</div>
    </div>
  );
}

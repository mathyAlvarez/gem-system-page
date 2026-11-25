import type { ReactNode } from "react";
import "./gradient-text-demo.css";

type TextTileProps = {
  label?: string;
  children: ReactNode;
};

export function TextTile({ label, children }: TextTileProps) {
  return (
    <div className="gt-demo__item">
      {label ? <p className="gt-demo__label">{label}</p> : null}
      <div className="gt-demo__stage">{children}</div>
    </div>
  );
}

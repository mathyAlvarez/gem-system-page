import type { ReactNode } from "react";
import "./gradient-border-demo.css";

type BorderTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the stroke reads the same in both themes. */
export function BorderTile({ label, children }: BorderTileProps) {
  return (
    <div className="gb-demo__item">
      {label ? <p className="gb-demo__label">{label}</p> : null}
      <div className="gb-demo__stage">{children}</div>
    </div>
  );
}

type BorderTargetProps = {
  children: ReactNode;
};

/** Child with its own fill: the ring is drawn around it and the fill stays. */
export function BorderTarget({ children }: BorderTargetProps) {
  return <span className="gb-demo__target">{children}</span>;
}

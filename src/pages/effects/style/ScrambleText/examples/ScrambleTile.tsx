import type { ReactNode } from "react";
import "./scramble-text-demo.css";

type ScrambleTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark terminal-like stage, the same in both themes. */
export function ScrambleTile({ label, children }: ScrambleTileProps) {
  return (
    <div className="scramble-demo__item">
      {label ? <p className="scramble-demo__label">{label}</p> : null}
      <div className="scramble-demo__stage">{children}</div>
    </div>
  );
}

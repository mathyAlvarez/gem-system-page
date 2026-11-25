import type { ReactNode } from "react";
import "./flash-demo.css";

type FlashTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the flash reads the same in light and dark themes. */
export function FlashTile({ label, children }: FlashTileProps) {
  return (
    <div className="flash-demo__item">
      {label ? <p className="flash-demo__label">{label}</p> : null}
      <div className="flash-demo__stage">{children}</div>
    </div>
  );
}

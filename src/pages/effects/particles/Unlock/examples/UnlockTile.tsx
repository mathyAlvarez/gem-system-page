import type { ReactNode } from "react";
import "./unlock-demo.css";

type UnlockTileProps = {
  label?: string;
  children: ReactNode;
};

export function UnlockTile({ label, children }: UnlockTileProps) {
  return (
    <div className="ul-demo__item">
      {label ? <p className="ul-demo__label">{label}</p> : null}
      {children}
    </div>
  );
}

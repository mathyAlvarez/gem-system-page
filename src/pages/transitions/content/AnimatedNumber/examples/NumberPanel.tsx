import type { ReactNode } from "react";
import "./animated-number-demo.css";

type NumberPanelProps = {
  label: string;
  children: ReactNode;
};

export function NumberPanel({ label, children }: NumberPanelProps) {
  return (
    <div className="animated-number-demo__panel">
      <span className="animated-number-demo__label">{label}</span>
      <span className="animated-number-demo__figure">{children}</span>
    </div>
  );
}

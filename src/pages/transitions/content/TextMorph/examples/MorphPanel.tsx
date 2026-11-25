import type { ReactNode } from "react";
import "./text-morph-demo.css";

type MorphPanelProps = {
  label: string;
  children: ReactNode;
};

export function MorphPanel({ label, children }: MorphPanelProps) {
  return (
    <div className="text-morph-demo__panel">
      <span className="text-morph-demo__label">{label}</span>
      <span className="text-morph-demo__figure">{children}</span>
    </div>
  );
}

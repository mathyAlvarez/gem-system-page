import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import "./transition-demo.css";

type DemoPanelProps = { title: string; children: ReactNode; block?: boolean };

export function DemoPanel({ title, children, block = false }: DemoPanelProps) {
  return (
    <div className={cn("transition-demo__panel", block && "transition-demo__panel--block")}>
      <p className="transition-demo__panel-title">{title}</p>
      <div className="transition-demo__panel-body">{children}</div>
    </div>
  );
}

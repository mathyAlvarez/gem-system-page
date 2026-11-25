import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import "./sidebar-demo.css";

type SidebarFrameProps = {
  title: string;
  note?: string;
  end?: boolean;
  className?: string;
  children: ReactNode;
};

export function SidebarFrame({ title, note, end = false, className, children }: SidebarFrameProps) {
  return (
    <div className={cn("sidebar-frame", end && "sidebar-frame--end", className)}>
      {children}
      <div className="sidebar-frame__page">
        <h3 className="sidebar-frame__title">{title}</h3>
        {note ? <p className="sidebar-frame__note">{note}</p> : null}
      </div>
    </div>
  );
}

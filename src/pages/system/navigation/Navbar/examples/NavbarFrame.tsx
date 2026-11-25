import type { ReactNode } from "react";
import "./navbar-demo.css";

type NavbarFrameProps = { title: string; note: string; children: ReactNode };

export function NavbarFrame({ title, note, children }: NavbarFrameProps) {
  return (
    <div className="navbar-frame">
      {children}
      <div className="navbar-frame__page">
        <h3 className="navbar-frame__title">{title}</h3>
        <p className="navbar-frame__note">{note}</p>
      </div>
    </div>
  );
}

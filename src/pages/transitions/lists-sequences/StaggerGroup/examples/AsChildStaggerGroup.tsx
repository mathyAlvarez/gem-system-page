import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type AsChildStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
  sibling: string;
};

export function AsChildStaggerGroup({ toggleOut, toggleIn, sibling }: AsChildStaggerGroupProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="stagger-group-demo">
      <StaggerControls
        toggle={isIn ? toggleOut : toggleIn}
        isIn={isIn}
        onToggle={() => setIsIn((value) => !value)}
      />
      <StaggerGroup asChild isIn={isIn} staggerDelay={55}>
        <ul className="stagger-group-demo__list">
          {STAGGER_GROUP_TILES.map((label) => (
            <li key={label} className="stagger-group-demo__tile">
              {label}
            </li>
          ))}
        </ul>
      </StaggerGroup>
      <p className="stagger-group-demo__sibling">{sibling}</p>
    </div>
  );
}

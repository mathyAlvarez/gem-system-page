import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_GRID_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type GridStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
  enter: string;
  exit: string;
  sibling: string;
};

export function GridStaggerGroup({
  toggleOut,
  toggleIn,
  enter,
  exit,
  sibling,
}: GridStaggerGroupProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="stagger-group-demo stagger-group-demo--wide">
      <StaggerControls
        toggle={isIn ? toggleOut : toggleIn}
        enter={enter}
        exit={exit}
        isIn={isIn}
        onToggle={() => setIsIn((value) => !value)}
        onEnter={() => setIsIn(true)}
        onExit={() => setIsIn(false)}
      />
      <StaggerGroup
        className="stagger-group-demo__grid"
        isIn={isIn}
        staggerDelay={40}
        distance={10}
      >
        {STAGGER_GROUP_GRID_TILES.map((label) => (
          <div key={label} className="stagger-group-demo__tile">
            {label}
          </div>
        ))}
      </StaggerGroup>
      <p className="stagger-group-demo__sibling">{sibling}</p>
    </div>
  );
}

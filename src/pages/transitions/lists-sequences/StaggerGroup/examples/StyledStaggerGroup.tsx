import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";
import "./stagger-group-overrides.css";

type StyledStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
};

export function StyledStaggerGroup({ toggleOut, toggleIn }: StyledStaggerGroupProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="stagger-group-demo">
      <StaggerControls
        toggle={isIn ? toggleOut : toggleIn}
        isIn={isIn}
        onToggle={() => setIsIn((value) => !value)}
      />
      <StaggerGroup className="stagger-group-demo__list card-shell" isIn={isIn}>
        {STAGGER_GROUP_TILES.map((label) => (
          <div key={label} className="stagger-group-demo__tile">
            {label}
          </div>
        ))}
      </StaggerGroup>
    </div>
  );
}

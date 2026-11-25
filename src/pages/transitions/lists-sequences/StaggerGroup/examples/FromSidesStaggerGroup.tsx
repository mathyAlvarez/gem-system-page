import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type FromSidesStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
};

export function FromSidesStaggerGroup({ toggleOut, toggleIn }: FromSidesStaggerGroupProps) {
  const [isIn, setIsIn] = useState(false);

  return (
    <div className="stagger-group-demo">
      <StaggerControls
        toggle={isIn ? toggleOut : toggleIn}
        isIn={isIn}
        onToggle={() => setIsIn((value) => !value)}
      />
      <StaggerGroup
        className="stagger-group-demo__list"
        isIn={isIn}
        from="left"
        distance={24}
        staggerDelay={60}
      >
        {STAGGER_GROUP_TILES.map((label) => (
          <div key={label} className="stagger-group-demo__tile">
            {label}
          </div>
        ))}
      </StaggerGroup>
    </div>
  );
}

import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type UtilitiesStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
  enter: string;
  exit: string;
  sibling: string;
};

export function UtilitiesStaggerGroup({
  toggleOut,
  toggleIn,
  enter,
  exit,
  sibling,
}: UtilitiesStaggerGroupProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="stagger-group-demo">
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
        className="stagger-group-demo__list"
        isIn={isIn}
        classNames={{ root: "gemst-flex", item: "gemst-relative" }}
      >
        {STAGGER_GROUP_TILES.map((label) => (
          <div key={label} className="stagger-group-demo__tile">
            {label}
          </div>
        ))}
      </StaggerGroup>
      <p className="stagger-group-demo__sibling">{sibling}</p>
    </div>
  );
}

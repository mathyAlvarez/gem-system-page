import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type TimingStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
  enter: string;
  exit: string;
  sibling: string;
};

export function TimingStaggerGroup({
  toggleOut,
  toggleIn,
  enter,
  exit,
  sibling,
}: TimingStaggerGroupProps) {
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
        duration={{ enter: 360, exit: 200 }}
        delay={{ enter: 40, exit: 0 }}
        staggerDelay={{ enter: 70, exit: 40 }}
        easing={{ enter: "enter", exit: "exit" }}
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

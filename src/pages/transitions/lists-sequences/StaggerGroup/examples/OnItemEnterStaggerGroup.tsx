import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type OnItemEnterStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
  logLabel: string;
  empty: string;
};

export function OnItemEnterStaggerGroup({
  toggleOut,
  toggleIn,
  logLabel,
  empty,
}: OnItemEnterStaggerGroupProps) {
  const [isIn, setIsIn] = useState(false);
  const [log, setLog] = useState<number[]>([]);

  return (
    <div className="stagger-group-demo">
      <p className="stagger-group-demo__log">
        {logLabel} <strong>{log.length === 0 ? empty : log.join(" → ")}</strong>
      </p>
      <StaggerControls
        toggle={isIn ? toggleOut : toggleIn}
        isIn={isIn}
        onToggle={() => {
          setLog([]);
          setIsIn((value) => !value);
        }}
      />
      <StaggerGroup
        className="stagger-group-demo__list"
        isIn={isIn}
        staggerDelay={80}
        onItemEnter={(index) => setLog((prev) => [...prev, index])}
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

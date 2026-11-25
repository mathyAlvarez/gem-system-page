import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type CallbacksStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
  empty: string;
};

export function CallbacksStaggerGroup({ toggleOut, toggleIn, empty }: CallbacksStaggerGroupProps) {
  const [isIn, setIsIn] = useState(true);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

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
        onStagger={(event) => push(`onStagger · ${event.reason}`)}
        outStagger={(event) => push(`outStagger · ${event.reason}`)}
      >
        {STAGGER_GROUP_TILES.map((label) => (
          <div key={label} className="stagger-group-demo__tile">
            {label}
          </div>
        ))}
      </StaggerGroup>
      <ul className="stagger-group-demo__event-log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}

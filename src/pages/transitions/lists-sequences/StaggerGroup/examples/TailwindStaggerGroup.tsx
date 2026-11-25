import { useState } from "react";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

type TailwindStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
};

export function TailwindStaggerGroup({ toggleOut, toggleIn }: TailwindStaggerGroupProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="stagger-group-demo">
      <StaggerControls
        toggle={isIn ? toggleOut : toggleIn}
        isIn={isIn}
        onToggle={() => setIsIn((value) => !value)}
      />
      <StaggerGroup
        isIn={isIn}
        duration={360}
        className="flex flex-col gap-2 [--gemst-stagger-easing:var(--gemst-easing-emphasized)]"
      >
        {STAGGER_GROUP_TILES.map((label) => (
          <div
            key={label}
            className="rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-4 py-3 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]"
          >
            {label}
          </div>
        ))}
      </StaggerGroup>
    </div>
  );
}

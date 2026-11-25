import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

type StateGlowProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateGlow({ pausedLabel, disabledLabel, target }: StateGlowProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="glow-demo__controls">
        <Switch
          label={pausedLabel}
          checked={isPaused}
          onChange={(event) => setIsPaused(event.target.checked)}
        />
        <Switch
          label={disabledLabel}
          checked={isDisabled}
          onChange={(event) => setIsDisabled(event.target.checked)}
        />
      </div>
      <GlowTile>
        <Glow isPaused={isPaused} isDisabled={isDisabled} className="glow-demo__host">
          <span className="glow-demo__target">{target}</span>
        </Glow>
      </GlowTile>
    </>
  );
}

import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

type StateVortexProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateVortex({ pausedLabel, disabledLabel, target }: StateVortexProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="vortex-demo__controls">
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
      <VortexTile>
        <Vortex
          trigger="always"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="vortex-demo__host"
        >
          <div className="vortex-demo__tile">{target}</div>
        </Vortex>
      </VortexTile>
    </>
  );
}

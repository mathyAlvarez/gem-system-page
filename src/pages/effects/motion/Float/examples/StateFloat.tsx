import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

type StateFloatProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateFloat({ pausedLabel, disabledLabel, target }: StateFloatProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="float-demo__controls">
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
      <FloatTile>
        <Float
          variant="sway"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="float-demo__host"
        >
          <span className="float-demo__target">{target}</span>
        </Float>
      </FloatTile>
    </>
  );
}

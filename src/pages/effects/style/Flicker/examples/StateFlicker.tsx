import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

type StateFlickerProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateFlicker({ pausedLabel, disabledLabel, target }: StateFlickerProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="flicker-demo__controls">
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
      <FlickerTile>
        <Flicker
          variant="fault"
          duration={4200}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="flicker-demo__host"
        >
          <span className="flicker-demo__target">{target}</span>
        </Flicker>
      </FlickerTile>
    </>
  );
}

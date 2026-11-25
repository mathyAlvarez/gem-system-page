import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type StateFlashProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateFlash({ pausedLabel, disabledLabel, target }: StateFlashProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="flash-demo__controls">
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
      <FlashTile>
        <Flash
          trigger="always"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="flash-demo__host"
        >
          <span className="flash-demo__target">{target}</span>
        </Flash>
      </FlashTile>
    </>
  );
}

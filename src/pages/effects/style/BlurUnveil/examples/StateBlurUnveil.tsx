import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import { UNVEIL_PULSE_DURATION } from "./demo.ts";
import "./blur-unveil-demo.css";

type StateBlurUnveilProps = {
  pausedLabel: string;
  disabledLabel: string;
};

export function StateBlurUnveil({ pausedLabel, disabledLabel }: StateBlurUnveilProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="unveil-demo__controls">
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
      <UnveilTile>
        <BlurUnveil
          variant="pulse"
          duration={UNVEIL_PULSE_DURATION}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="unveil-demo__host"
        >
          <UnveilImage />
        </BlurUnveil>
      </UnveilTile>
    </>
  );
}

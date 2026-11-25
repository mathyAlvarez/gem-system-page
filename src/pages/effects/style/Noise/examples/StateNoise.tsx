import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

type StateNoiseProps = {
  pausedLabel: string;
  disabledLabel: string;
};

export function StateNoise({ pausedLabel, disabledLabel }: StateNoiseProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="noise-demo__controls">
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
      <NoiseTile>
        <Noise
          variant="film"
          intensity="lg"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="noise-demo__host"
        >
          <NoiseCard />
        </Noise>
      </NoiseTile>
    </>
  );
}

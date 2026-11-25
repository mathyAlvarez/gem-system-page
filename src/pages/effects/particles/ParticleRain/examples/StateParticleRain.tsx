import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import "./particle-rain-demo.css";

type StateParticleRainProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateParticleRain({ pausedLabel, disabledLabel, label }: StateParticleRainProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="pr-demo__controls">
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
      <ParticleRain isPaused={isPaused} isDisabled={isDisabled} className="pr-demo__host">
        <p className="pr-demo__copy">{label}</p>
      </ParticleRain>
    </>
  );
}

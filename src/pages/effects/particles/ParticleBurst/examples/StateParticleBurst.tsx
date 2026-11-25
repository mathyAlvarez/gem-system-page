import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import "./particle-burst-demo.css";

type StateParticleBurstProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateParticleBurst({ pausedLabel, disabledLabel, label }: StateParticleBurstProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="pb-demo__controls">
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
      <div className="pb-demo__stage">
        <ParticleBurst duration={2400} intensity="lg" isPaused={isPaused} isDisabled={isDisabled}>
          <span className="pb-demo__target">{label}</span>
        </ParticleBurst>
      </div>
    </>
  );
}

import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

type StatePulseScaleProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StatePulseScale({ pausedLabel, disabledLabel, target }: StatePulseScaleProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="pulse-demo__controls">
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
      <PulseTile>
        <PulseScale
          variant="ping"
          duration={1600}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="pulse-demo__host"
        >
          <span className="pulse-demo__cta">{target}</span>
        </PulseScale>
      </PulseTile>
    </>
  );
}

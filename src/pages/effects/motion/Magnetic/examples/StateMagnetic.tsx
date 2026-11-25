import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type StateMagneticProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateMagnetic({ pausedLabel, disabledLabel, target }: StateMagneticProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="magnetic-demo__controls">
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
      <MagneticTile>
        <Magnetic
          intensity="lg"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="magnetic-demo__host"
        >
          <span className="magnetic-demo__target">{target}</span>
        </Magnetic>
      </MagneticTile>
    </>
  );
}

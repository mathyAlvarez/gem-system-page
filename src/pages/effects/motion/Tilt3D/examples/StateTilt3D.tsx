import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type StateTilt3DProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateTilt3D({ pausedLabel, disabledLabel, target }: StateTilt3DProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="tilt-demo__controls">
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
      <TiltTile>
        <Tilt3D
          intensity="lg"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="tilt-demo__host"
        >
          <span className="tilt-demo__target">{target}</span>
        </Tilt3D>
      </TiltTile>
    </>
  );
}

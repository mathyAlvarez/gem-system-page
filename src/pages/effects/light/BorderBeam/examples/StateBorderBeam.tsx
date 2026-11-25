import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

type StateBorderBeamProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateBorderBeam({ pausedLabel, disabledLabel, target }: StateBorderBeamProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="border-beam-demo__controls">
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
      <BeamTile>
        <BorderBeam isPaused={isPaused} isDisabled={isDisabled} className="border-beam-demo__host">
          <span className="border-beam-demo__target">{target}</span>
        </BorderBeam>
      </BeamTile>
    </>
  );
}

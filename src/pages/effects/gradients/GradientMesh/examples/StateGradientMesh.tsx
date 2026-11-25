import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

type StateGradientMeshProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateGradientMesh({ pausedLabel, disabledLabel, label }: StateGradientMeshProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="gm-demo__controls">
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
      <MeshTile>
        <GradientMesh
          duration={4000}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="gm-demo__host"
        >
          <p className="gm-demo__copy">{label}</p>
        </GradientMesh>
      </MeshTile>
    </>
  );
}

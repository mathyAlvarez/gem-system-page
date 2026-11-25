import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

type StateGlitchProps = {
  pausedLabel: string;
  disabledLabel: string;
};

export function StateGlitch({ pausedLabel, disabledLabel }: StateGlitchProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="glitch-demo__controls">
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
      <GlitchTile>
        <Glitch isPaused={isPaused} isDisabled={isDisabled} className="glitch-demo__host">
          <GlitchImage />
        </Glitch>
      </GlitchTile>
    </>
  );
}

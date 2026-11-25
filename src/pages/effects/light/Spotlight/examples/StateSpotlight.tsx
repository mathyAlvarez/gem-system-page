import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Spotlight } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type StateSpotlightProps = {
  pausedLabel: string;
  disabledLabel: string;
  target: string;
};

export function StateSpotlight({ pausedLabel, disabledLabel, target }: StateSpotlightProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="spotlight-demo__controls">
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
      <SpotlightTile>
        <Spotlight
          trigger="always"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="spotlight-demo__host"
        >
          <div className="spotlight-demo__tile">
            <p className="spotlight-demo__title">{target}</p>
          </div>
        </Spotlight>
      </SpotlightTile>
    </>
  );
}

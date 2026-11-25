import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import { ZOOM_PULSE_DURATION } from "./demo.ts";
import "./zoom-demo.css";

type StateZoomProps = {
  pausedLabel: string;
  disabledLabel: string;
};

export function StateZoom({ pausedLabel, disabledLabel }: StateZoomProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="zoom-demo__controls">
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
      <ZoomTile>
        <Zoom
          variant="pulse"
          trigger="always"
          duration={ZOOM_PULSE_DURATION}
          intensity="lg"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="zoom-demo__host"
        >
          <ZoomImage />
        </Zoom>
      </ZoomTile>
    </>
  );
}

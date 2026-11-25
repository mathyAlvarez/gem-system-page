import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type StateHoloFoilProps = {
  pausedLabel: string;
  disabledLabel: string;
  title: string;
};

export function StateHoloFoil({ pausedLabel, disabledLabel, title }: StateHoloFoilProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="foil-demo__controls">
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
      <FoilTile>
        <HoloFoil
          trigger="always"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="foil-demo__host"
        >
          <FoilCard title={title} />
        </HoloFoil>
      </FoilTile>
    </>
  );
}

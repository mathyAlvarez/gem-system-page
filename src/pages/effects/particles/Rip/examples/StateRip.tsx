import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Rip } from "@gem-org/gemffects/rip";
import "./rip-demo.css";

type StateRipProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateRip({ pausedLabel, disabledLabel, label }: StateRipProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="rp-demo__controls">
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
      <div className="rp-demo__stage">
        <Rip
          trigger="always"
          variant="tear"
          duration={1400}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="rp-demo__host"
        >
          <div className="rp-demo__target">{label}</div>
        </Rip>
      </div>
    </>
  );
}

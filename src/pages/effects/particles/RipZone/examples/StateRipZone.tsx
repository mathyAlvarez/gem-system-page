import { useState } from "react";
import { Button, Switch } from "@gem-org/gem-system";
import { RipZone } from "@gem-org/gemffects/rip-zone";
import "./rip-zone-demo.css";

type StateRipZoneProps = {
  pausedLabel: string;
  disabledLabel: string;
  reset: string;
  label: string;
};

export function StateRipZone({ pausedLabel, disabledLabel, reset, label }: StateRipZoneProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  return (
    <>
      <div className="rz-demo__controls">
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
        <Button size="sm" variant="neutral" onClick={() => setResetKey((current) => current + 1)}>
          {reset}
        </Button>
      </div>
      <RipZone
        trigger="always"
        duration={1600}
        resetKey={resetKey}
        isPaused={isPaused}
        isDisabled={isDisabled}
        className="rz-demo__host"
      >
        <div className="rz-demo__target">
          <p className="rz-demo__title">{label}</p>
        </div>
      </RipZone>
    </>
  );
}

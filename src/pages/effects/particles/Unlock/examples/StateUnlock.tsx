import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Unlock } from "@gem-org/gemffects/unlock";
import "./unlock-demo.css";

type StateUnlockProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateUnlock({ pausedLabel, disabledLabel, label }: StateUnlockProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="ul-demo__controls">
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
      <Unlock duration={1800} isPaused={isPaused} isDisabled={isDisabled} className="ul-demo__host">
        <div className="ul-demo__card">
          <p className="ul-demo__title">{label}</p>
        </div>
      </Unlock>
    </>
  );
}

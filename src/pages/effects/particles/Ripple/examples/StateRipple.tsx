import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Ripple } from "@gem-org/gemffects/ripple";
import "./ripple-demo.css";

type StateRippleProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateRipple({ pausedLabel, disabledLabel, label }: StateRippleProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="rl-demo__controls">
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
      <Ripple
        variant="pulse"
        trigger="hover"
        duration={2400}
        isPaused={isPaused}
        isDisabled={isDisabled}
        className="rl-demo__host"
      >
        <span className="rl-demo__tile rl-demo__tile--label">{label}</span>
      </Ripple>
    </>
  );
}

import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Meteors } from "@gem-org/gemffects/meteors";
import "./meteors-demo.css";

type StateMeteorsProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateMeteors({ pausedLabel, disabledLabel, label }: StateMeteorsProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="mt-demo__controls">
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
      <Meteors intensity="lg" isPaused={isPaused} isDisabled={isDisabled} className="mt-demo__host">
        <p className="mt-demo__copy">{label}</p>
      </Meteors>
    </>
  );
}

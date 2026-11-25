import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type StateScrambleTextProps = {
  pausedLabel: string;
  disabledLabel: string;
};

export function StateScrambleText({ pausedLabel, disabledLabel }: StateScrambleTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="scramble-demo__controls">
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
      <ScrambleTile>
        <ScrambleText
          variant="loop"
          duration={2400}
          hold={600}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="scramble-demo__copy"
        >
          FREEZE FRAME
        </ScrambleText>
      </ScrambleTile>
    </>
  );
}

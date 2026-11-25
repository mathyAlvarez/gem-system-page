import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type StateGradientTextProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateGradientText({ pausedLabel, disabledLabel, label }: StateGradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="gt-demo__controls">
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
      <TextTile>
        <GradientText isPaused={isPaused} isDisabled={isDisabled}>
          <span className="gt-demo__copy">{label}</span>
        </GradientText>
      </TextTile>
    </>
  );
}

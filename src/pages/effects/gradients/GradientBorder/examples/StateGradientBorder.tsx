import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type StateGradientBorderProps = {
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateGradientBorder({
  pausedLabel,
  disabledLabel,
  label,
}: StateGradientBorderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="gb-demo__controls">
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
      <BorderTile>
        <GradientBorder
          thickness={3}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="gb-demo__host"
        >
          <BorderTarget>{label}</BorderTarget>
        </GradientBorder>
      </BorderTile>
    </>
  );
}

import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

type StateGradientGlossyProps = {
  activeLabel: string;
  pausedLabel: string;
  disabledLabel: string;
  label: string;
};

export function StateGradientGlossy({
  activeLabel,
  pausedLabel,
  disabledLabel,
  label,
}: StateGradientGlossyProps) {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="gg-demo__controls">
        <Switch
          label={activeLabel}
          checked={isActive}
          onChange={(event) => setIsActive(event.target.checked)}
        />
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
      <GlossyTile>
        <GradientGlossy
          duration={1200}
          isActive={isActive}
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="gg-demo__host"
        >
          <span className="gg-demo__target">{label}</span>
        </GradientGlossy>
      </GlossyTile>
    </>
  );
}

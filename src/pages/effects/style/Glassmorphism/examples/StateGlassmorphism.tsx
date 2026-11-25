import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

type StateGlassmorphismProps = {
  pausedLabel: string;
  disabledLabel: string;
  title: string;
  copy: string;
};

export function StateGlassmorphism({
  pausedLabel,
  disabledLabel,
  title,
  copy,
}: StateGlassmorphismProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="glass-demo__controls">
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
      <GlassScene>
        <Glassmorphism
          variant="sheen"
          isPaused={isPaused}
          isDisabled={isDisabled}
          className="glass-demo__host"
        >
          <GlassCopy title={title} copy={copy} />
        </Glassmorphism>
      </GlassScene>
    </>
  );
}

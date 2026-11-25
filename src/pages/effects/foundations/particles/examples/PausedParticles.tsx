import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { ParticleStage } from "./ParticleStage.tsx";
import "./particles-demo.css";

type PausedParticlesProps = {
  hint: string;
  pauseLabel: string;
};

export function PausedParticles({ hint, pauseLabel }: PausedParticlesProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="particles-demo__controls">
      <Switch
        label={pauseLabel}
        checked={isPaused}
        onChange={(event) => setIsPaused(event.target.checked)}
      />
      <ParticleStage
        kind="spark"
        motion="burst"
        count={18}
        durationMs={1400}
        isPaused={isPaused}
        hint={hint}
        wide
      />
    </div>
  );
}

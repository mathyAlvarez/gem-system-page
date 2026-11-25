import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import "./animated-number-demo.css";

type TailwindAnimatedNumberProps = {
  label: string;
  next: string;
};

export function TailwindAnimatedNumber({ label, next }: TailwindAnimatedNumberProps) {
  const [score, setScore] = useState(42);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button size="sm" variant="secondary" onClick={() => setScore((value) => value + 7)}>
          {next}
        </Button>
      </div>
      <div className="flex flex-col gap-1 rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] p-6">
        <span className="font-mono text-xs text-[var(--gem-color-fg-muted)]">{label}</span>
        <AnimatedNumber
          value={score}
          effect="up"
          duration={450}
          className="text-[length:var(--gem-font-size-5xl)] font-bold text-[var(--gem-color-accent)] [--gemst-animated-number-shift:0.8em]"
        />
      </div>
    </div>
  );
}

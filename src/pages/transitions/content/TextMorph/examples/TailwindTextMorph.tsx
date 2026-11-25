import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { TEXT_MORPH_TITLES } from "./demo.ts";
import "./text-morph-demo.css";

type TailwindTextMorphProps = {
  groupLabel: string;
};

export function TailwindTextMorph({ groupLabel }: TailwindTextMorphProps) {
  const [title, setTitle] = useState<(typeof TEXT_MORPH_TITLES)[number]>(TEXT_MORPH_TITLES[0]);

  return (
    <div className="text-morph-demo">
      <div className="text-morph-demo__controls" role="group" aria-label={groupLabel}>
        {TEXT_MORPH_TITLES.map((item) => (
          <Button
            key={item}
            size="sm"
            variant={title === item ? "primary" : "secondary"}
            aria-pressed={title === item}
            onClick={() => setTitle(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] p-6">
        <TextMorph
          value={title}
          effect="down"
          duration={450}
          className="text-[length:var(--gem-font-size-4xl)] font-bold text-[var(--gem-color-accent)] [--gemst-text-morph-shift:0.9em]"
        />
      </div>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { TEXT_MORPH_PHRASES } from "./demo.ts";
import { MorphPanel } from "./MorphPanel.tsx";

const STAGGERS = [0, 55] as const;

type StaggerTextMorphProps = {
  groupLabel: string;
};

export function StaggerTextMorph({ groupLabel }: StaggerTextMorphProps) {
  const [phrase, setPhrase] = useState<(typeof TEXT_MORPH_PHRASES)[number]>(TEXT_MORPH_PHRASES[0]);

  return (
    <div className="text-morph-demo">
      <div className="text-morph-demo__controls" role="group" aria-label={groupLabel}>
        {TEXT_MORPH_PHRASES.map((item) => (
          <Button
            key={item}
            size="sm"
            variant={phrase === item ? "primary" : "secondary"}
            aria-pressed={phrase === item}
            onClick={() => setPhrase(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="text-morph-demo__row">
        {STAGGERS.map((stagger) => (
          <MorphPanel key={stagger} label={`staggerDelay={${stagger}}`}>
            <TextMorph value={phrase} splitBy="words" staggerDelay={stagger} />
          </MorphPanel>
        ))}
      </div>
    </div>
  );
}

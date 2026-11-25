import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { TEXT_MORPH_PHRASES } from "./demo.ts";
import { MorphPanel } from "./MorphPanel.tsx";

type SplitWordsTextMorphProps = {
  label: string;
};

export function SplitWordsTextMorph({ label }: SplitWordsTextMorphProps) {
  const [phrase, setPhrase] = useState<(typeof TEXT_MORPH_PHRASES)[number]>(TEXT_MORPH_PHRASES[0]);

  return (
    <div className="text-morph-demo">
      <div className="text-morph-demo__controls" role="group" aria-label={label}>
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
      <MorphPanel label={label}>
        <TextMorph value={phrase} splitBy="words" staggerDelay={40} />
      </MorphPanel>
    </div>
  );
}

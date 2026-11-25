import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { TEXT_MORPH_TITLES } from "./demo.ts";
import { MorphPanel } from "./MorphPanel.tsx";

type SplitCharactersTextMorphProps = {
  label: string;
};

export function SplitCharactersTextMorph({ label }: SplitCharactersTextMorphProps) {
  const [title, setTitle] = useState<(typeof TEXT_MORPH_TITLES)[number]>(TEXT_MORPH_TITLES[0]);

  return (
    <div className="text-morph-demo">
      <div className="text-morph-demo__controls" role="group" aria-label={label}>
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
      <MorphPanel label={label}>
        <TextMorph value={title} splitBy="characters" staggerDelay={28} />
      </MorphPanel>
    </div>
  );
}

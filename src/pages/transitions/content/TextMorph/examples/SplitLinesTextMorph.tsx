import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { TEXT_MORPH_LINES, lineOptionLabel } from "./demo.ts";
import { MorphPanel } from "./MorphPanel.tsx";

type SplitLinesTextMorphProps = {
  label: string;
};

export function SplitLinesTextMorph({ label }: SplitLinesTextMorphProps) {
  const [block, setBlock] = useState<(typeof TEXT_MORPH_LINES)[number]>(TEXT_MORPH_LINES[0]);

  return (
    <div className="text-morph-demo">
      <div className="text-morph-demo__controls" role="group" aria-label={label}>
        {TEXT_MORPH_LINES.map((item) => (
          <Button
            key={item}
            size="sm"
            variant={block === item ? "primary" : "secondary"}
            aria-pressed={block === item}
            onClick={() => setBlock(item)}
          >
            {lineOptionLabel(item)}
          </Button>
        ))}
      </div>
      <MorphPanel label={label}>
        <TextMorph value={block} splitBy="lines" staggerDelay={60} />
      </MorphPanel>
    </div>
  );
}

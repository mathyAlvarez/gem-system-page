import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { TEXT_MORPH_TITLES } from "./demo.ts";
import { MorphPanel } from "./MorphPanel.tsx";

type DisabledTextMorphProps = {
  groupLabel: string;
};

export function DisabledTextMorph({ groupLabel }: DisabledTextMorphProps) {
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
      <div className="text-morph-demo__row">
        <MorphPanel label="default">
          <TextMorph value={title} />
        </MorphPanel>
        <MorphPanel label="isDisabled">
          <TextMorph value={title} isDisabled />
        </MorphPanel>
        <MorphPanel label="unmountOnExit">
          <TextMorph value={title} unmountOnExit />
        </MorphPanel>
      </div>
    </div>
  );
}

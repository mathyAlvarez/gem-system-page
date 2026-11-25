import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph } from "@gem-org/gemsitions/text-morph";
import { TEXT_MORPH_TITLES } from "./demo.ts";
import { MorphPanel } from "./MorphPanel.tsx";

type CallbacksTextMorphProps = {
  label: string;
  empty: string;
};

export function CallbacksTextMorph({ label, empty }: CallbacksTextMorphProps) {
  const [title, setTitle] = useState<(typeof TEXT_MORPH_TITLES)[number]>(TEXT_MORPH_TITLES[0]);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

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
        <TextMorph
          value={title}
          onTextMorph={(event) => push(`onTextMorph · ${event.reason}`)}
          outTextMorph={(event) => push(`outTextMorph · ${event.reason}`)}
        />
      </MorphPanel>
      <ul className="text-morph-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type HeadingScrambleTextProps = {
  title: string;
  caption: string;
  replay: string;
};

export function HeadingScrambleText({ title, caption, replay }: HeadingScrambleTextProps) {
  const [run, setRun] = useState(0);

  return (
    <>
      <ScrambleTile>
        <h2 className="scramble-demo__heading">
          <ScrambleText key={run} duration={1400}>
            {title}
          </ScrambleText>
        </h2>
        <p className="scramble-demo__caption">{caption}</p>
      </ScrambleTile>
      <div>
        <Button size="sm" variant="secondary" onClick={() => setRun((current) => current + 1)}>
          {replay}
        </Button>
      </div>
    </>
  );
}

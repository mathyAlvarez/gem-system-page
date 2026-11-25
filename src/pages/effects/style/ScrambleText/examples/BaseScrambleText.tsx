import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type BaseScrambleTextProps = {
  replay: string;
};

export function BaseScrambleText({ replay }: BaseScrambleTextProps) {
  const [run, setRun] = useState(0);

  return (
    <>
      <ScrambleTile>
        <ScrambleText key={run} className="scramble-demo__copy">
          GEM ORG
        </ScrambleText>
      </ScrambleTile>
      <div>
        <Button size="sm" variant="secondary" onClick={() => setRun((current) => current + 1)}>
          {replay}
        </Button>
      </div>
    </>
  );
}

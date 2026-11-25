import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

export function LoopScrambleText() {
  return (
    <div className="scramble-demo">
      {[600, 1200, 2400].map((hold) => (
        <ScrambleTile key={hold} label={`hold={${hold}}`}>
          <ScrambleText
            variant="loop"
            hold={hold}
            className="scramble-demo__copy scramble-demo__copy--sm"
          >
            DECODE
          </ScrambleText>
        </ScrambleTile>
      ))}
    </div>
  );
}

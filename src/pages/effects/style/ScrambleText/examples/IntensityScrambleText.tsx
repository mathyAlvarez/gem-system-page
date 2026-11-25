import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

export function IntensityScrambleText() {
  return (
    <div className="scramble-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <ScrambleTile key={intensity} label={`intensity="${intensity}"`}>
          <ScrambleText
            variant="loop"
            intensity={intensity}
            duration={1600}
            className="scramble-demo__copy scramble-demo__copy--sm"
          >
            SIGNAL
          </ScrambleText>
        </ScrambleTile>
      ))}
    </div>
  );
}

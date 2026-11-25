import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

const SAMPLES = [
  { label: "duration={400}", duration: 400, delay: 0 },
  { label: "duration={900}", duration: 900, delay: 0 },
  { label: "duration={2000}", duration: 2000, delay: 0 },
  { label: "delay={1000}", duration: 900, delay: 1000 },
];

export function DurationScrambleText() {
  return (
    <div className="scramble-demo">
      {SAMPLES.map((sample) => (
        <ScrambleTile key={sample.label} label={sample.label}>
          <ScrambleText
            variant="loop"
            duration={sample.duration}
            delay={sample.delay}
            className="scramble-demo__copy scramble-demo__copy--sm"
          >
            TIMING
          </ScrambleText>
        </ScrambleTile>
      ))}
    </div>
  );
}

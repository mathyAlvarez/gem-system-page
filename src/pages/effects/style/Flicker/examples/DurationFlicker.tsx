import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

const durations = [1400, 2800, 4800];

export function DurationFlicker() {
  return (
    <div className="flicker-demo">
      {durations.map((duration) => (
        <FlickerTile key={duration} label={`duration={${duration}}`}>
          <Flicker duration={duration} className="flicker-demo__host">
            <span className="flicker-demo__target">{duration}ms</span>
          </Flicker>
        </FlickerTile>
      ))}
    </div>
  );
}

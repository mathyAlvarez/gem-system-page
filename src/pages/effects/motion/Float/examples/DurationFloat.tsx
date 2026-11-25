import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

const durations = [1600, 2800, 4800];

export function DurationFloat() {
  return (
    <div className="float-demo">
      {durations.map((duration) => (
        <FloatTile key={duration} label={`duration={${duration}}`}>
          <Float duration={duration} className="float-demo__host">
            <span className="float-demo__target">{duration} ms</span>
          </Float>
        </FloatTile>
      ))}
    </div>
  );
}

import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

const durations = [180, 320, 700];

export function DurationFlash() {
  return (
    <div className="flash-demo">
      {durations.map((duration) => (
        <FlashTile key={duration} label={`duration={${duration}}`}>
          <Flash duration={duration} className="flash-demo__host">
            <span className="flash-demo__target">{duration} ms</span>
          </Flash>
        </FlashTile>
      ))}
    </div>
  );
}

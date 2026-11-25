import { Flicker } from "@gem-org/gemffects/flicker";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityFlicker() {
  return (
    <div className="flicker-demo">
      {intensities.map((intensity) => (
        <FlickerTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Flicker intensity={intensity} variant="buzz" className="flicker-demo__host">
            <span className="flicker-demo__target">{intensity}</span>
          </Flicker>
        </FlickerTile>
      ))}
    </div>
  );
}

import { Float } from "@gem-org/gemffects/float";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityFloat() {
  return (
    <div className="float-demo">
      {intensities.map((intensity) => (
        <FloatTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Float variant="sway" intensity={intensity} className="float-demo__host">
            <span className="float-demo__target">{intensity}</span>
          </Float>
        </FloatTile>
      ))}
    </div>
  );
}

import { Magnetic } from "@gem-org/gemffects/magnetic";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityMagnetic() {
  return (
    <div className="magnetic-demo">
      {intensities.map((intensity) => (
        <MagneticTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Magnetic intensity={intensity} className="magnetic-demo__host">
            <span className="magnetic-demo__target">{intensity}</span>
          </Magnetic>
        </MagneticTile>
      ))}
    </div>
  );
}

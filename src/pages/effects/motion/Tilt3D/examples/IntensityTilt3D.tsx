import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityTilt3D() {
  return (
    <div className="tilt-demo">
      {intensities.map((intensity) => (
        <TiltTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Tilt3D intensity={intensity} className="tilt-demo__host">
            <span className="tilt-demo__target">{intensity}</span>
          </Tilt3D>
        </TiltTile>
      ))}
    </div>
  );
}

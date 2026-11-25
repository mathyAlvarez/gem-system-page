import { BorderBeam } from "@gem-org/gemffects/border-beam";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityBorderBeam() {
  return (
    <div className="border-beam-demo">
      {intensities.map((intensity) => (
        <BeamTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <BorderBeam intensity={intensity} className="border-beam-demo__host">
            <span className="border-beam-demo__target">{intensity}</span>
          </BorderBeam>
        </BeamTile>
      ))}
    </div>
  );
}

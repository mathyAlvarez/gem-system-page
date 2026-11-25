import { Glow } from "@gem-org/gemffects/glow";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityGlow() {
  return (
    <div className="glow-demo">
      {intensities.map((intensity) => (
        <GlowTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Glow intensity={intensity} className="glow-demo__host">
            <span className="glow-demo__target">{intensity}</span>
          </Glow>
        </GlowTile>
      ))}
    </div>
  );
}

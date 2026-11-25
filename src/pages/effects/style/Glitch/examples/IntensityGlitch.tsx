import { Glitch } from "@gem-org/gemffects/glitch";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityGlitch() {
  return (
    <div className="glitch-demo">
      {intensities.map((intensity) => (
        <GlitchTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Glitch intensity={intensity} className="glitch-demo__host">
            <GlitchImage compact />
          </Glitch>
        </GlitchTile>
      ))}
    </div>
  );
}

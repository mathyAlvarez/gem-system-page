import { Vortex } from "@gem-org/gemffects/vortex";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityVortex() {
  return (
    <div className="vortex-demo">
      {intensities.map((intensity) => (
        <VortexTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Vortex trigger="always" intensity={intensity} className="vortex-demo__host">
            <div className="vortex-demo__tile">{intensity}</div>
          </Vortex>
        </VortexTile>
      ))}
    </div>
  );
}

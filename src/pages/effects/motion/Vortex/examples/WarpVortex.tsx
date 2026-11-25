import { Vortex } from "@gem-org/gemffects/vortex";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg"];

export function WarpVortex() {
  return (
    <div className="vortex-demo">
      {intensities.map((intensity) => (
        <VortexTile key={intensity} label={`intensity="${intensity}"`}>
          <Vortex variant="warp" intensity={intensity} className="vortex-demo__host">
            <div className="vortex-demo__tile">warp · {intensity}</div>
          </Vortex>
        </VortexTile>
      ))}
    </div>
  );
}

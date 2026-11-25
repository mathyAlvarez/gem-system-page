import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

const durations = [2000, 4200, 9000];

export function DurationVortex() {
  return (
    <div className="vortex-demo">
      {durations.map((duration) => (
        <VortexTile key={duration} label={`duration={${duration}}`}>
          <Vortex trigger="always" duration={duration} className="vortex-demo__host">
            <div className="vortex-demo__tile">{duration}ms</div>
          </Vortex>
        </VortexTile>
      ))}
    </div>
  );
}

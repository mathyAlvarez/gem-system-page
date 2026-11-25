import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import { VORTEX_COLORS } from "./demo.ts";
import "./vortex-demo.css";

export function ColorVortex() {
  return (
    <div className="vortex-demo">
      {Object.entries(VORTEX_COLORS).map(([name, color]) => (
        <VortexTile key={name} label={`color="${color}"`}>
          <Vortex trigger="always" intensity="lg" color={color} className="vortex-demo__host">
            <div className="vortex-demo__tile">{name}</div>
          </Vortex>
        </VortexTile>
      ))}
    </div>
  );
}

import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import { VORTEX_VARIANTS } from "./demo.ts";
import "./vortex-demo.css";

export function VariantsVortex() {
  return (
    <div className="vortex-demo">
      {VORTEX_VARIANTS.map((variant) => (
        <VortexTile key={variant} label={`variant="${variant}"`}>
          <Vortex variant={variant} trigger="always" className="vortex-demo__host">
            <div className="vortex-demo__tile">{variant}</div>
          </Vortex>
        </VortexTile>
      ))}
    </div>
  );
}

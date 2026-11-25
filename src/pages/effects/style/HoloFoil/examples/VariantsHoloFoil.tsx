import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import { FOIL_VARIANTS } from "./demo.ts";
import "./holofoil-demo.css";

export function VariantsHoloFoil() {
  return (
    <div className="foil-demo">
      {FOIL_VARIANTS.map((variant) => (
        <FoilTile key={variant} label={`variant="${variant}"`}>
          <HoloFoil variant={variant} trigger="always" className="foil-demo__host">
            <FoilCard title={variant} compact />
          </HoloFoil>
        </FoilTile>
      ))}
    </div>
  );
}

import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilImage, FoilTile } from "./FoilTile.tsx";
import { FOIL_BLENDS } from "./demo.ts";
import "./holofoil-demo.css";

export function BlendHoloFoil() {
  return (
    <div className="foil-demo">
      {FOIL_BLENDS.map((blend) => (
        <FoilTile key={blend} label={`blend="${blend}"`}>
          <HoloFoil blend={blend} trigger="always" intensity="lg" className="foil-demo__host">
            <FoilImage compact />
          </HoloFoil>
        </FoilTile>
      ))}
    </div>
  );
}

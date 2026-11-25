import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

const durations = [2000, 4200, 8000];

export function DurationHoloFoil() {
  return (
    <div className="foil-demo">
      {durations.map((duration) => (
        <FoilTile key={duration} label={`duration={${duration}}`}>
          <HoloFoil trigger="always" duration={duration} className="foil-demo__host">
            <FoilCard title={`${duration}ms`} compact />
          </HoloFoil>
        </FoilTile>
      ))}
    </div>
  );
}

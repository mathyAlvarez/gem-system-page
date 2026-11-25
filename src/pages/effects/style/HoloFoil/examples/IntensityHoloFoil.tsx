import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityHoloFoil() {
  return (
    <div className="foil-demo">
      {intensities.map((intensity) => (
        <FoilTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <HoloFoil intensity={intensity} trigger="always" className="foil-demo__host">
            <FoilCard title={String(intensity)} compact />
          </HoloFoil>
        </FoilTile>
      ))}
    </div>
  );
}

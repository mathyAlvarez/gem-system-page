import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilImage, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

const layers = [
  { label: "shine · sparkle", shine: true, sparkle: true },
  { label: "shine={false}", shine: false, sparkle: true },
  { label: "sparkle={false}", shine: true, sparkle: false },
];

export function LayersHoloFoil() {
  return (
    <div className="foil-demo">
      {layers.map(({ label, shine, sparkle }) => (
        <FoilTile key={label} label={label}>
          <HoloFoil trigger="always" shine={shine} sparkle={sparkle} className="foil-demo__host">
            <FoilImage compact />
          </HoloFoil>
        </FoilTile>
      ))}
    </div>
  );
}

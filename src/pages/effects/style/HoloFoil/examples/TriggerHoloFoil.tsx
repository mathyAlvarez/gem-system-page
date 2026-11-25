import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type TriggerHoloFoilProps = {
  hoverLabel: string;
  alwaysLabel: string;
};

export function TriggerHoloFoil({ hoverLabel, alwaysLabel }: TriggerHoloFoilProps) {
  return (
    <div className="foil-demo">
      <FoilTile label='trigger="hover"'>
        <HoloFoil trigger="hover" className="foil-demo__host">
          <FoilCard title={hoverLabel} compact />
        </HoloFoil>
      </FoilTile>
      <FoilTile label='trigger="always"'>
        <HoloFoil trigger="always" className="foil-demo__host">
          <FoilCard title={alwaysLabel} compact />
        </HoloFoil>
      </FoilTile>
    </div>
  );
}

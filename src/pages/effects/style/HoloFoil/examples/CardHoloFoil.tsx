import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type CardHoloFoilProps = {
  title: string;
};

export function CardHoloFoil({ title }: CardHoloFoilProps) {
  return (
    <FoilTile>
      <HoloFoil className="foil-demo__host">
        <FoilCard title={title} />
      </HoloFoil>
    </FoilTile>
  );
}

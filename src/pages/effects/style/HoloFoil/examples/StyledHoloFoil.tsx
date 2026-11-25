import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";
import "./holofoil-overrides.css";

type StyledHoloFoilProps = {
  title: string;
};

export function StyledHoloFoil({ title }: StyledHoloFoilProps) {
  return (
    <FoilTile>
      <HoloFoil trigger="always" blend="screen" className="foil-chrome">
        <FoilCard kicker="chrome" title={title} />
      </HoloFoil>
    </FoilTile>
  );
}

import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type AsChildHoloFoilProps = {
  title: string;
};

export function AsChildHoloFoil({ title }: AsChildHoloFoilProps) {
  return (
    <FoilTile>
      <HoloFoil asChild>
        <article className="foil-demo__card">
          <p className="foil-demo__kicker">asChild</p>
          <p className="foil-demo__title">{title}</p>
        </article>
      </HoloFoil>
    </FoilTile>
  );
}

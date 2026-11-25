import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type TiltHoloFoilProps = {
  title: string;
};

export function TiltHoloFoil({ title }: TiltHoloFoilProps) {
  return (
    <FoilTile>
      <Tilt3D glare={false} className="foil-demo__host">
        <HoloFoil className="foil-demo__host">
          <FoilCard kicker="Tilt3D + HoloFoil" title={title} />
        </HoloFoil>
      </Tilt3D>
    </FoilTile>
  );
}

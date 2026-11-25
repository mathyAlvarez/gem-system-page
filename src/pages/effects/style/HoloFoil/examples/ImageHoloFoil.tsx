import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilImage, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type ImageHoloFoilProps = {
  alt: string;
};

export function ImageHoloFoil({ alt }: ImageHoloFoilProps) {
  return (
    <FoilTile>
      <HoloFoil className="foil-demo__host">
        <FoilImage alt={alt} />
      </HoloFoil>
    </FoilTile>
  );
}

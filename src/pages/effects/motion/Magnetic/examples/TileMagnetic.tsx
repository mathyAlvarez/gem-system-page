import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type TileMagneticProps = {
  kicker: string;
  title: string;
};

export function TileMagnetic({ kicker, title }: TileMagneticProps) {
  return (
    <MagneticTile>
      <Magnetic className="magnetic-demo__host">
        <div className="magnetic-demo__tile">
          <p className="magnetic-demo__kicker">{kicker}</p>
          <p className="magnetic-demo__title">{title}</p>
        </div>
      </Magnetic>
    </MagneticTile>
  );
}

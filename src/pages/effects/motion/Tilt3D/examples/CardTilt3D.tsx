import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type CardTilt3DProps = {
  kicker: string;
  title: string;
};

export function CardTilt3D({ kicker, title }: CardTilt3DProps) {
  return (
    <TiltTile>
      <Tilt3D className="tilt-demo__host">
        <div className="tilt-demo__tile">
          <p className="tilt-demo__kicker">{kicker}</p>
          <p className="tilt-demo__title">{title}</p>
        </div>
      </Tilt3D>
    </TiltTile>
  );
}

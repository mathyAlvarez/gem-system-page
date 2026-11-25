import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";
import "./tilt-3d-overrides.css";

type StyledTilt3DProps = {
  kicker: string;
  title: string;
};

export function StyledTilt3D({ kicker, title }: StyledTilt3DProps) {
  return (
    <TiltTile>
      <Tilt3D intensity="lg" className="tilt-holo">
        <div className="tilt-demo__tile">
          <p className="tilt-demo__kicker">{kicker}</p>
          <p className="tilt-demo__title">{title}</p>
        </div>
      </Tilt3D>
    </TiltTile>
  );
}

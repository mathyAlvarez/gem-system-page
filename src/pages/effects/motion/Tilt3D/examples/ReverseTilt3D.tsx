import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

export function ReverseTilt3D() {
  return (
    <div className="tilt-demo">
      <TiltTile label="reverse={false}">
        <Tilt3D intensity="lg" className="tilt-demo__host">
          <span className="tilt-demo__target">default</span>
        </Tilt3D>
      </TiltTile>
      <TiltTile label="reverse">
        <Tilt3D reverse intensity="lg" className="tilt-demo__host">
          <span className="tilt-demo__target">reverse</span>
        </Tilt3D>
      </TiltTile>
    </div>
  );
}

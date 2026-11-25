import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

const angles = [8, 14, 24];

export function MaxTiltTilt3D() {
  return (
    <div className="tilt-demo">
      {angles.map((maxTilt) => (
        <TiltTile key={maxTilt} label={`maxTilt={${maxTilt}}`}>
          <Tilt3D maxTilt={maxTilt} className="tilt-demo__host">
            <span className="tilt-demo__target">{maxTilt}°</span>
          </Tilt3D>
        </TiltTile>
      ))}
    </div>
  );
}

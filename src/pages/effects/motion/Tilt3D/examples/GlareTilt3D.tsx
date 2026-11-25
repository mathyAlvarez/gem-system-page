import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import { TILT_GLARE_COLORS } from "./demo.ts";
import "./tilt-3d-demo.css";

export function GlareTilt3D() {
  return (
    <div className="tilt-demo">
      <TiltTile label="glare">
        <Tilt3D intensity="lg" className="tilt-demo__host">
          <div className="tilt-demo__tile" />
        </Tilt3D>
      </TiltTile>
      <TiltTile label="glareColor">
        <Tilt3D intensity="lg" glareColor={TILT_GLARE_COLORS.tertiary} className="tilt-demo__host">
          <div className="tilt-demo__tile" />
        </Tilt3D>
      </TiltTile>
      <TiltTile label="glare={false}">
        <Tilt3D intensity="lg" glare={false} className="tilt-demo__host">
          <div className="tilt-demo__tile" />
        </Tilt3D>
      </TiltTile>
    </div>
  );
}

import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type TriggerTilt3DProps = {
  hoverLabel: string;
  pressLabel: string;
};

export function TriggerTilt3D({ hoverLabel, pressLabel }: TriggerTilt3DProps) {
  return (
    <div className="tilt-demo">
      <TiltTile label='trigger="hover"'>
        <Tilt3D trigger="hover" className="tilt-demo__host">
          <span className="tilt-demo__target">{hoverLabel}</span>
        </Tilt3D>
      </TiltTile>
      <TiltTile label='trigger="press"'>
        <Tilt3D trigger="press" className="tilt-demo__host">
          <span className="tilt-demo__target">{pressLabel}</span>
        </Tilt3D>
      </TiltTile>
    </div>
  );
}

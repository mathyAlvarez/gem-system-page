import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import { MAGNETIC_AXES } from "./demo.ts";
import "./magnetic-demo.css";

export function AxisMagnetic() {
  return (
    <div className="magnetic-demo">
      {MAGNETIC_AXES.map((axis) => (
        <MagneticTile key={axis} label={`axis="${axis}"`}>
          <Magnetic axis={axis} intensity="lg" className="magnetic-demo__host">
            <span className="magnetic-demo__target">{axis}</span>
          </Magnetic>
        </MagneticTile>
      ))}
    </div>
  );
}

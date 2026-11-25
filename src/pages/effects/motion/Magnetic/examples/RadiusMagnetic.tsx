import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

const radii = [0, 40];

export function RadiusMagnetic() {
  return (
    <div className="magnetic-demo">
      {radii.map((radius) => (
        <MagneticTile key={radius} label={`radius={${radius}}`} field>
          <Magnetic radius={radius} className="rounded-full">
            <span className="magnetic-demo__pill">{radius} px</span>
          </Magnetic>
        </MagneticTile>
      ))}
    </div>
  );
}

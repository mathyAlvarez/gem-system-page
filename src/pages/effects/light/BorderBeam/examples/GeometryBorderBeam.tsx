import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

const thicknesses = [1, 2, 5];
const lengths = [8, 30, 60];

export function GeometryBorderBeam() {
  return (
    <div className="border-beam-demo">
      {thicknesses.map((thickness) => (
        <BeamTile key={`thickness-${thickness}`} label={`thickness={${thickness}}`}>
          <BorderBeam thickness={thickness} className="border-beam-demo__host">
            <span className="border-beam-demo__target">{thickness} px</span>
          </BorderBeam>
        </BeamTile>
      ))}
      {lengths.map((length) => (
        <BeamTile key={`length-${length}`} label={`length={${length}}`}>
          <BorderBeam length={length} className="border-beam-demo__host">
            <span className="border-beam-demo__target">{length}%</span>
          </BorderBeam>
        </BeamTile>
      ))}
    </div>
  );
}

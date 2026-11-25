import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

const offsets = [0, 90, 180, 270];

export function OffsetBorderBeam() {
  return (
    <div className="border-beam-demo">
      {offsets.map((offset) => (
        <BeamTile key={offset} label={`offset={${offset}}`}>
          <BorderBeam offset={offset} length={24} isPaused className="border-beam-demo__host">
            <span className="border-beam-demo__target">{offset}°</span>
          </BorderBeam>
        </BeamTile>
      ))}
    </div>
  );
}

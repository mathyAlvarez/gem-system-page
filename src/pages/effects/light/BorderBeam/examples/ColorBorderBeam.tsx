import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

export function ColorBorderBeam() {
  return (
    <div className="border-beam-demo">
      <BeamTile label="tertiary → neutral-50">
        <BorderBeam
          color="var(--gem-palette-tertiary-400)"
          colorAlt="var(--gem-palette-neutral-50)"
          className="border-beam-demo__host"
        >
          <span className="border-beam-demo__target">color</span>
        </BorderBeam>
      </BeamTile>
      <BeamTile label='variant="dual"'>
        <BorderBeam
          variant="dual"
          color="var(--gem-palette-primary-400)"
          colorAlt="var(--gem-palette-secondary-400)"
          className="border-beam-demo__host"
        >
          <span className="border-beam-demo__target">colorAlt</span>
        </BorderBeam>
      </BeamTile>
    </div>
  );
}

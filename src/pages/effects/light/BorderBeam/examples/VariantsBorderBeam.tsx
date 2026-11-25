import { BorderBeam, type BorderBeamVariant } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

const variants: BorderBeamVariant[] = ["orbit", "dual", "spark", "trace", "track"];

export function VariantsBorderBeam() {
  return (
    <div className="border-beam-demo">
      {variants.map((variant) => (
        <BeamTile key={variant} label={`variant="${variant}"`}>
          <BorderBeam variant={variant} className="border-beam-demo__host">
            <span className="border-beam-demo__target">{variant}</span>
          </BorderBeam>
        </BeamTile>
      ))}
    </div>
  );
}

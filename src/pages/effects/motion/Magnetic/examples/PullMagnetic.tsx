import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

const samples = [
  { strength: 0.15, maxOffset: 40 },
  { strength: 0.8, maxOffset: 8 },
  { strength: 0.8, maxOffset: 40 },
];

export function PullMagnetic() {
  return (
    <div className="magnetic-demo">
      {samples.map(({ strength, maxOffset }) => (
        <MagneticTile
          key={`${strength}-${maxOffset}`}
          label={`strength={${strength}} maxOffset={${maxOffset}}`}
        >
          <Magnetic strength={strength} maxOffset={maxOffset} className="magnetic-demo__host">
            <span className="magnetic-demo__target">
              {strength} · {maxOffset} px
            </span>
          </Magnetic>
        </MagneticTile>
      ))}
    </div>
  );
}

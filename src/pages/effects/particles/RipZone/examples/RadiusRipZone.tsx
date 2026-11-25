import { RipZone } from "@gem-org/gemffects/rip-zone";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

export function RadiusRipZone() {
  return (
    <div className="rz-demo">
      {[12, 28, 48].map((radius) => (
        <ZoneTile key={radius} label={`radius={${radius}}`}>
          <RipZone radius={radius} className="rz-demo__host">
            <div className="rz-demo__target rz-demo__target--sm">{radius}px</div>
          </RipZone>
        </ZoneTile>
      ))}
    </div>
  );
}

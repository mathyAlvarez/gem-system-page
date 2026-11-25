import { RipZone } from "@gem-org/gemffects/rip-zone";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

export function IntensityRipZone() {
  return (
    <div className="rz-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <ZoneTile key={intensity} label={`intensity="${intensity}"`}>
          <RipZone intensity={intensity} className="rz-demo__host">
            <div className="rz-demo__target rz-demo__target--sm">{intensity}</div>
          </RipZone>
        </ZoneTile>
      ))}
    </div>
  );
}

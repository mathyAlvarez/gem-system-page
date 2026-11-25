import { RipZone } from "@gem-org/gemffects/rip-zone";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

export function DurationRipZone() {
  return (
    <div className="rz-demo">
      {[150, 480, 1400].map((duration) => (
        <ZoneTile key={duration} label={`duration={${duration}}`}>
          <RipZone duration={duration} threshold={0.3} className="rz-demo__host">
            <div className="rz-demo__target rz-demo__target--sm">{duration} ms</div>
          </RipZone>
        </ZoneTile>
      ))}
    </div>
  );
}

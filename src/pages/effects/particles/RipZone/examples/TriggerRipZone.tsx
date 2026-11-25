import { RipZone } from "@gem-org/gemffects/rip-zone";
import { RIP_ZONE_TRIGGERS } from "./demo.ts";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

export function TriggerRipZone() {
  return (
    <div className="rz-demo">
      {RIP_ZONE_TRIGGERS.map((trigger) => (
        <ZoneTile key={trigger} label={`trigger="${trigger}"`}>
          <RipZone
            trigger={trigger}
            radius={trigger === "click" ? 36 : undefined}
            delay={trigger === "always" ? 600 : 0}
            className="rz-demo__host"
          >
            <div className="rz-demo__target rz-demo__target--sm">{trigger}</div>
          </RipZone>
        </ZoneTile>
      ))}
    </div>
  );
}

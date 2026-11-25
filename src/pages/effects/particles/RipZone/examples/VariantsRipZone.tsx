import { RipZone } from "@gem-org/gemffects/rip-zone";
import { RIP_ZONE_VARIANTS } from "./demo.ts";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

export function VariantsRipZone() {
  return (
    <div className="rz-demo">
      {RIP_ZONE_VARIANTS.map((variant) => (
        <ZoneTile key={variant} label={`variant="${variant}"`}>
          <RipZone variant={variant} className="rz-demo__host">
            <div className="rz-demo__target rz-demo__target--sm">{variant}</div>
          </RipZone>
        </ZoneTile>
      ))}
    </div>
  );
}

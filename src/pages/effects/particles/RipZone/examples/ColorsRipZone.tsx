import { RipZone } from "@gem-org/gemffects/rip-zone";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

export function ColorsRipZone() {
  return (
    <div className="rz-demo">
      <ZoneTile label='color="…tertiary-400" · matte'>
        <RipZone color="var(--gem-palette-tertiary-400)" variant="matte" className="rz-demo__host">
          <div className="rz-demo__target rz-demo__target--sm">matte</div>
        </RipZone>
      </ZoneTile>
      <ZoneTile label='color="…neutral-400" · foil'>
        <RipZone color="var(--gem-palette-neutral-400)" variant="foil" className="rz-demo__host">
          <div className="rz-demo__target rz-demo__target--sm">foil</div>
        </RipZone>
      </ZoneTile>
      <ZoneTile label='color="…secondary-700" · grit'>
        <RipZone color="var(--gem-palette-secondary-700)" variant="grit" className="rz-demo__host">
          <div className="rz-demo__target rz-demo__target--sm">grit</div>
        </RipZone>
      </ZoneTile>
    </div>
  );
}

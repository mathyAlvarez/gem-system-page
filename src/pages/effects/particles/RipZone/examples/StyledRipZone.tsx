import { RipZone } from "@gem-org/gemffects/rip-zone";
import "./rip-zone-demo.css";
import "./rip-zone-overrides.css";

type StyledRipZoneProps = {
  label: string;
};

export function StyledRipZone({ label }: StyledRipZoneProps) {
  return (
    <RipZone threshold={0.5} className="rz-demo__host rz-reveal">
      <div className="rz-demo__target">
        <p className="rz-demo__title rz-reveal__prize">{label}</p>
      </div>
    </RipZone>
  );
}

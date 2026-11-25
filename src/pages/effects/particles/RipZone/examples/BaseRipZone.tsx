import { RipZone } from "@gem-org/gemffects/rip-zone";
import "./rip-zone-demo.css";

type BaseRipZoneProps = {
  kicker: string;
  title: string;
};

export function BaseRipZone({ kicker, title }: BaseRipZoneProps) {
  return (
    <RipZone className="rz-demo__host">
      <div className="rz-demo__target">
        <p className="rz-demo__kicker">{kicker}</p>
        <p className="rz-demo__title">{title}</p>
      </div>
    </RipZone>
  );
}

import { RipZone } from "@gem-org/gemffects/rip-zone";
import "./rip-zone-demo.css";

type AsChildRipZoneProps = {
  kicker: string;
  title: string;
};

export function AsChildRipZone({ kicker, title }: AsChildRipZoneProps) {
  return (
    <RipZone asChild variant="matte" color="var(--gem-palette-neutral-500)">
      <article className="rz-demo__target rz-demo__host">
        <p className="rz-demo__kicker">{kicker}</p>
        <p className="rz-demo__title">{title}</p>
      </article>
    </RipZone>
  );
}

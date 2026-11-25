import { RipZone } from "@gem-org/gemffects/rip-zone";
import "./rip-zone-demo.css";

type ImageRipZoneProps = {
  alt: string;
};

export function ImageRipZone({ alt }: ImageRipZoneProps) {
  return (
    <RipZone variant="grit" className="rz-demo__host rz-demo__media">
      <img src="/gem-org-favicon.png" alt={alt} className="rz-demo__image" draggable={false} />
    </RipZone>
  );
}

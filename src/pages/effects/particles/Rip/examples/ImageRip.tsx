import { Rip } from "@gem-org/gemffects/rip";
import "./rip-demo.css";

type ImageRipProps = {
  alt: string;
};

export function ImageRip({ alt }: ImageRipProps) {
  return (
    <div className="rp-demo__stage">
      <Rip variant="tear" particle="confetti" className="rp-demo__media">
        <img src="/gem-org-favicon.png" alt={alt} className="rp-demo__image" draggable={false} />
      </Rip>
    </div>
  );
}

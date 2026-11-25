import { Ripple } from "@gem-org/gemffects/ripple";
import "./ripple-demo.css";

type ImageRippleProps = {
  alt: string;
};

export function ImageRipple({ alt }: ImageRippleProps) {
  return (
    <Ripple
      variant="pulse"
      duration={1100}
      color="var(--gem-palette-neutral-0)"
      intensity="lg"
      className="rl-demo__host rl-demo__media"
    >
      <img src="/gem-org-favicon.png" alt={alt} className="rl-demo__image" draggable={false} />
    </Ripple>
  );
}

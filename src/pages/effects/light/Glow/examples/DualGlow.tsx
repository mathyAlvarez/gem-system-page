import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

type DualGlowProps = {
  title: string;
  body: string;
};

export function DualGlow({ title, body }: DualGlowProps) {
  return (
    <GlowTile>
      <Glow
        variant="dual"
        color="var(--gem-palette-primary-400)"
        colorAlt="var(--gem-palette-secondary-400)"
        className="glow-demo__host"
      >
        <article className="glow-demo__card">
          <h4 className="glow-demo__card-title">{title}</h4>
          <p className="glow-demo__card-body">{body}</p>
        </article>
      </Glow>
    </GlowTile>
  );
}

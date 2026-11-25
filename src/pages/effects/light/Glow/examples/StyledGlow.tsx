import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";
import "./glow-overrides.css";

type StyledGlowProps = {
  title: string;
  body: string;
};

export function StyledGlow({ title, body }: StyledGlowProps) {
  return (
    <GlowTile>
      <Glow className="glow-sunset">
        <article className="glow-demo__card">
          <h4 className="glow-demo__card-title">{title}</h4>
          <p className="glow-demo__card-body">{body}</p>
        </article>
      </Glow>
    </GlowTile>
  );
}

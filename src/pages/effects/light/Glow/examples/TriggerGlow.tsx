import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

type TriggerGlowProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerGlow({ hoverLabel, clickLabel }: TriggerGlowProps) {
  return (
    <div className="glow-demo">
      <GlowTile label='trigger="hover"'>
        <Glow trigger="hover" className="glow-demo__host">
          <span className="glow-demo__target">{hoverLabel}</span>
        </Glow>
      </GlowTile>
      <GlowTile label='trigger="click"'>
        <Glow trigger="click" asChild className="glow-demo__host">
          <button type="button" className="glow-demo__target">
            {clickLabel}
          </button>
        </Glow>
      </GlowTile>
    </div>
  );
}

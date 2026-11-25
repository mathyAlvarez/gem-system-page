import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import { GLOW_COLORS } from "./demo.ts";
import "./glow-demo.css";

const tones = ["primary", "secondary", "tertiary"] as const;

export function ColorGlow() {
  return (
    <div className="glow-demo">
      {tones.map((tone) => (
        <GlowTile key={tone} label={GLOW_COLORS[tone]}>
          <Glow color={GLOW_COLORS[tone]} className="glow-demo__host">
            <span className="glow-demo__target glow-demo__target--bare">{tone}</span>
          </Glow>
        </GlowTile>
      ))}
    </div>
  );
}

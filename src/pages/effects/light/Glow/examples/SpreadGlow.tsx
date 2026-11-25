import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

const spreads = [8, 24, 48];

export function SpreadGlow() {
  return (
    <div className="glow-demo">
      {spreads.map((spread) => (
        <GlowTile key={spread} label={`spread={${spread}}`}>
          <Glow spread={spread} className="glow-demo__host">
            <span className="glow-demo__target">{spread} px</span>
          </Glow>
        </GlowTile>
      ))}
    </div>
  );
}

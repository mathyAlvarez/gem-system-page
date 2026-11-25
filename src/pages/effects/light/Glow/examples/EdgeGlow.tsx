import { Glow, type GlowEdge } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

const edges: GlowEdge[] = ["top", "right", "bottom", "left"];

export function EdgeGlow() {
  return (
    <div className="glow-demo">
      {edges.map((edge) => (
        <GlowTile key={edge} label={`edge="${edge}"`}>
          <Glow variant="edge" edge={edge} className="glow-demo__host">
            <span className="glow-demo__target">{edge}</span>
          </Glow>
        </GlowTile>
      ))}
    </div>
  );
}

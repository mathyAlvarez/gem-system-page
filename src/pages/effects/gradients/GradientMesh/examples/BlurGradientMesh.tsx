import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

const BLURS = [8, 40, 80, "3rem"] as const;

export function BlurGradientMesh() {
  return (
    <div className="gm-demo">
      {BLURS.map((blur) => (
        <MeshTile key={blur} label={typeof blur === "number" ? `blur={${blur}}` : `blur="${blur}"`}>
          <GradientMesh blur={blur} className="gm-demo__host gm-demo__host--sm">
            <p className="gm-demo__copy">{blur}</p>
          </GradientMesh>
        </MeshTile>
      ))}
    </div>
  );
}

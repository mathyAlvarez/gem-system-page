import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MESH_VARIANTS } from "./demo.ts";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

export function VariantsGradientMesh() {
  return (
    <div className="gm-demo">
      {MESH_VARIANTS.map((variant) => (
        <MeshTile key={variant} label={`variant="${variant}"`}>
          <GradientMesh variant={variant} className="gm-demo__host gm-demo__host--sm">
            <p className="gm-demo__copy">{variant}</p>
          </GradientMesh>
        </MeshTile>
      ))}
    </div>
  );
}

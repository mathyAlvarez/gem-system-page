import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

export function DurationGradientMesh() {
  return (
    <div className="gm-demo">
      {[3000, 9000, 18000].map((duration) => (
        <MeshTile key={duration} label={`duration={${duration}}`}>
          <GradientMesh duration={duration} className="gm-demo__host gm-demo__host--sm">
            <p className="gm-demo__copy">{duration}ms</p>
          </GradientMesh>
        </MeshTile>
      ))}
    </div>
  );
}

import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

const INTENSITIES = ["sm", "md", "lg", 1] as const;

export function IntensityGradientMesh() {
  return (
    <div className="gm-demo">
      {INTENSITIES.map((intensity) => (
        <MeshTile
          key={intensity}
          label={
            typeof intensity === "number" ? `intensity={${intensity}}` : `intensity="${intensity}"`
          }
        >
          <GradientMesh
            intensity={intensity}
            variant="static"
            className="gm-demo__host gm-demo__host--sm"
          >
            <p className="gm-demo__copy">{intensity}</p>
          </GradientMesh>
        </MeshTile>
      ))}
    </div>
  );
}

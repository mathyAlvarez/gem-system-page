import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

type BaseGradientMeshProps = {
  label: string;
};

export function BaseGradientMesh({ label }: BaseGradientMeshProps) {
  return (
    <MeshTile>
      <GradientMesh className="gm-demo__host">
        <p className="gm-demo__copy">{label}</p>
      </GradientMesh>
    </MeshTile>
  );
}

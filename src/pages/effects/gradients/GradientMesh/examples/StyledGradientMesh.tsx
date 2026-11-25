import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";
import "./gradient-mesh-overrides.css";

type StyledGradientMeshProps = {
  label: string;
};

export function StyledGradientMesh({ label }: StyledGradientMeshProps) {
  return (
    <MeshTile>
      <GradientMesh className="gm-demo__host gm-sunset">
        <p className="gm-demo__copy">{label}</p>
      </GradientMesh>
    </MeshTile>
  );
}

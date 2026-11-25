import { Button } from "@gem-org/gem-system";
import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

type AsChildGradientMeshProps = {
  label: string;
};

export function AsChildGradientMesh({ label }: AsChildGradientMeshProps) {
  return (
    <div className="gm-demo">
      <MeshTile label="<button>">
        <GradientMesh asChild intensity="lg" blur={24}>
          <button type="button" className="gm-demo__button">
            {label}
          </button>
        </GradientMesh>
      </MeshTile>
      <MeshTile label='<Button variant="primary">'>
        <GradientMesh asChild blur={24}>
          <Button variant="primary">{label}</Button>
        </GradientMesh>
      </MeshTile>
    </div>
  );
}

import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

type TriggerGradientMeshProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerGradientMesh({ hoverLabel, clickLabel }: TriggerGradientMeshProps) {
  return (
    <div className="gm-demo">
      <MeshTile label='trigger="hover"'>
        <GradientMesh trigger="hover" className="gm-demo__host gm-demo__host--sm">
          <p className="gm-demo__copy">{hoverLabel}</p>
        </GradientMesh>
      </MeshTile>
      <MeshTile label='trigger="click"'>
        <GradientMesh trigger="click" className="gm-demo__host gm-demo__host--sm">
          <p className="gm-demo__copy">{clickLabel}</p>
        </GradientMesh>
      </MeshTile>
    </div>
  );
}

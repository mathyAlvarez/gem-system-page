import { Button } from "@gem-org/gem-system";
import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

type HeroGradientMeshProps = {
  kicker: string;
  title: string;
  body: string;
  action: string;
};

export function HeroGradientMesh({ kicker, title, body, action }: HeroGradientMeshProps) {
  return (
    <MeshTile>
      <GradientMesh
        variant="aurora"
        duration={14000}
        intensity="sm"
        blur={60}
        className="gm-demo__hero"
      >
        <div className="gm-demo__hero-content">
          <p className="gm-demo__kicker">{kicker}</p>
          <h3 className="gm-demo__title">{title}</h3>
          <p className="gm-demo__body">{body}</p>
          <Button variant="primary">{action}</Button>
        </div>
      </GradientMesh>
    </MeshTile>
  );
}

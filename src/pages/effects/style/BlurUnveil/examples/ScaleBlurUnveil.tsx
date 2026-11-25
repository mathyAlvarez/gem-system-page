import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

const scales = [1, 1.06, 1.2];

export function ScaleBlurUnveil() {
  return (
    <div className="unveil-demo">
      {scales.map((scale) => (
        <UnveilTile key={scale} label={`scale={${scale}}`}>
          <BlurUnveil trigger="hover" scale={scale} className="unveil-demo__host">
            <UnveilImage compact />
          </BlurUnveil>
        </UnveilTile>
      ))}
    </div>
  );
}

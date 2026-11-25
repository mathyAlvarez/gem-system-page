import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

const samples = [
  { perspective: 400, scale: 1 },
  { perspective: 900, scale: 1.04 },
  { perspective: 2000, scale: 1.1 },
];

export function DepthTilt3D() {
  return (
    <div className="tilt-demo">
      {samples.map(({ perspective, scale }) => (
        <TiltTile key={perspective} label={`perspective={${perspective}} scale={${scale}}`}>
          <Tilt3D
            perspective={perspective}
            scale={scale}
            intensity="lg"
            className="tilt-demo__host"
          >
            <span className="tilt-demo__target">{perspective} px</span>
          </Tilt3D>
        </TiltTile>
      ))}
    </div>
  );
}

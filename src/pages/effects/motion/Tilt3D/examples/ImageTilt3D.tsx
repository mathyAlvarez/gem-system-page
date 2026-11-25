import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type ImageTilt3DProps = {
  alt: string;
};

export function ImageTilt3D({ alt }: ImageTilt3DProps) {
  return (
    <TiltTile>
      <Tilt3D intensity="sm" className="tilt-demo__host">
        <img className="tilt-demo__image" src="/gem-org-favicon.png" alt={alt} />
      </Tilt3D>
    </TiltTile>
  );
}

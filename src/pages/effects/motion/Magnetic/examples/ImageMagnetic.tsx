import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type ImageMagneticProps = {
  alt: string;
};

export function ImageMagnetic({ alt }: ImageMagneticProps) {
  return (
    <MagneticTile>
      <Magnetic intensity="sm" className="magnetic-demo__host">
        <img className="magnetic-demo__image" src="/gem-org-favicon.png" alt={alt} />
      </Magnetic>
    </MagneticTile>
  );
}

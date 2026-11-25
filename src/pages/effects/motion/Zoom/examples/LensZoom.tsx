import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

type LensZoomProps = {
  alt: string;
};

export function LensZoom({ alt }: LensZoomProps) {
  return (
    <ZoomTile>
      <Zoom variant="lens" scale={1.8} duration={200} className="zoom-demo__host">
        <ZoomImage alt={alt} />
      </Zoom>
    </ZoomTile>
  );
}

import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

type ImageZoomProps = {
  alt: string;
};

export function ImageZoom({ alt }: ImageZoomProps) {
  return (
    <ZoomTile>
      <Zoom className="zoom-demo__host">
        <ZoomImage alt={alt} />
      </Zoom>
    </ZoomTile>
  );
}

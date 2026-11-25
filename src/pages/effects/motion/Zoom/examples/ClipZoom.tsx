import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

export function ClipZoom() {
  return (
    <div className="zoom-demo">
      <ZoomTile label="clip">
        <Zoom intensity="lg" className="zoom-demo__host">
          <ZoomImage compact />
        </Zoom>
      </ZoomTile>
      <ZoomTile label="clip={false}">
        <Zoom intensity="lg" clip={false}>
          <ZoomImage compact />
        </Zoom>
      </ZoomTile>
    </div>
  );
}

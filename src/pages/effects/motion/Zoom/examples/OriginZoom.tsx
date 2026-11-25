import { Zoom, type ZoomOrigin } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

const origins: ZoomOrigin[] = ["top-left", "center", "bottom-right", "pointer"];

export function OriginZoom() {
  return (
    <div className="zoom-demo">
      {origins.map((origin) => (
        <ZoomTile key={origin} label={`origin="${origin}"`}>
          <Zoom origin={origin} intensity="lg" className="zoom-demo__host">
            <ZoomImage compact />
          </Zoom>
        </ZoomTile>
      ))}
    </div>
  );
}

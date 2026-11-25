import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import { ZOOM_TRIGGERS } from "./demo.ts";
import "./zoom-demo.css";

export function TriggerZoom() {
  return (
    <div className="zoom-demo">
      {ZOOM_TRIGGERS.map((trigger) => (
        <ZoomTile key={trigger} label={`trigger="${trigger}"`}>
          <Zoom trigger={trigger} className="zoom-demo__host">
            <ZoomImage compact />
          </Zoom>
        </ZoomTile>
      ))}
    </div>
  );
}

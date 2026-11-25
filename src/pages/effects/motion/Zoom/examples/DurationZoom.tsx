import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

const durations = [120, 280, 700];

export function DurationZoom() {
  return (
    <div className="zoom-demo">
      {durations.map((duration) => (
        <ZoomTile key={duration} label={`duration={${duration}}`}>
          <Zoom duration={duration} intensity="lg" className="zoom-demo__host">
            <ZoomImage compact />
          </Zoom>
        </ZoomTile>
      ))}
    </div>
  );
}

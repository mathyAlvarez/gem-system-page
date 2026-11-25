import { Zoom } from "@gem-org/gemffects/zoom";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityZoom() {
  return (
    <div className="zoom-demo">
      {intensities.map((intensity) => (
        <ZoomTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Zoom intensity={intensity} className="zoom-demo__host">
            <ZoomImage compact />
          </Zoom>
        </ZoomTile>
      ))}
    </div>
  );
}

import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import { ZOOM_PULSE_DURATION, ZOOM_VARIANTS } from "./demo.ts";
import "./zoom-demo.css";

export function VariantsZoom() {
  return (
    <div className="zoom-demo">
      {ZOOM_VARIANTS.map((variant) => (
        <ZoomTile key={variant} label={`variant="${variant}"`}>
          <Zoom
            variant={variant}
            intensity={variant === "lens" ? "lg" : "md"}
            duration={variant === "pulse" ? ZOOM_PULSE_DURATION : undefined}
            className="zoom-demo__host"
          >
            <ZoomImage compact />
          </Zoom>
        </ZoomTile>
      ))}
    </div>
  );
}

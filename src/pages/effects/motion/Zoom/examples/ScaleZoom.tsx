import { Zoom, type ZoomVariant } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

const samples: { variant: ZoomVariant; scale: number }[] = [
  { variant: "in", scale: 1.04 },
  { variant: "in", scale: 1.4 },
  { variant: "out", scale: 1.4 },
];

export function ScaleZoom() {
  return (
    <div className="zoom-demo">
      {samples.map(({ variant, scale }) => (
        <ZoomTile key={`${variant}-${scale}`} label={`variant="${variant}" scale={${scale}}`}>
          <Zoom variant={variant} scale={scale} className="zoom-demo__host">
            <ZoomImage compact />
          </Zoom>
        </ZoomTile>
      ))}
    </div>
  );
}

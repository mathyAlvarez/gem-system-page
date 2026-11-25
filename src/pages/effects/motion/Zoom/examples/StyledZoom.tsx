import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";
import "./zoom-overrides.css";

type StyledZoomProps = {
  alt: string;
};

export function StyledZoom({ alt }: StyledZoomProps) {
  return (
    <ZoomTile>
      <Zoom intensity="lg" duration={520} className="zoom-spring">
        <ZoomImage alt={alt} />
      </Zoom>
    </ZoomTile>
  );
}

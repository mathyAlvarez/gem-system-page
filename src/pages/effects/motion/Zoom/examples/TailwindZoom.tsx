import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

type TailwindZoomProps = {
  alt: string;
};

export function TailwindZoom({ alt }: TailwindZoomProps) {
  return (
    <ZoomTile>
      <Zoom
        intensity="lg"
        className="rounded-[var(--gem-radius-xl)] hover:shadow-[0_0_0_2px_var(--gem-palette-primary-400)]"
        classNames={{ surface: "saturate-50 [.gemfx-zoom:hover_&]:saturate-150" }}
      >
        <ZoomImage alt={alt} />
      </Zoom>
    </ZoomTile>
  );
}

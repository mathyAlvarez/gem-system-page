import { Button } from "@gem-org/gem-system";
import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

type AsChildZoomProps = {
  label: string;
};

export function AsChildZoom({ label }: AsChildZoomProps) {
  return (
    <ZoomTile>
      <Zoom asChild intensity="sm">
        <Button size="lg">{label}</Button>
      </Zoom>
    </ZoomTile>
  );
}

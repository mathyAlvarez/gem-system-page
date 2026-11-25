import { Flicker, type FlickerEdge } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

const edges: FlickerEdge[] = ["left", "right", "top", "bottom", "x", "y"];

export function EdgeFlicker() {
  return (
    <div className="flicker-demo">
      {edges.map((edge) => (
        <FlickerTile key={edge} label={`edge="${edge}"`}>
          <Flicker edge={edge} className="flicker-demo__host">
            <span className="flicker-demo__tile" />
          </Flicker>
        </FlickerTile>
      ))}
    </div>
  );
}

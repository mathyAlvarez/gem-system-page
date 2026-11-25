import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import { FLICKER_COLORS } from "./demo.ts";
import "./flicker-demo.css";

export function ColorFlicker() {
  return (
    <div className="flicker-demo">
      {Object.entries(FLICKER_COLORS).map(([name, color]) => (
        <FlickerTile key={name} label={`color="${color}"`}>
          <Flicker color={color} variant="buzz" className="flicker-demo__host">
            <span className="flicker-demo__target">{name}</span>
          </Flicker>
        </FlickerTile>
      ))}
    </div>
  );
}

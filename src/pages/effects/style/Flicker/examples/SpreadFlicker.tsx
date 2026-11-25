import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

const spreads = [6, 18, 36];

export function SpreadFlicker() {
  return (
    <div className="flicker-demo">
      {spreads.map((spread) => (
        <FlickerTile key={spread} label={`spread={${spread}}`}>
          <Flicker spread={spread} variant="buzz" className="flicker-demo__host">
            <span className="flicker-demo__target">{spread}px</span>
          </Flicker>
        </FlickerTile>
      ))}
    </div>
  );
}

import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

const splits = [2, 8, 16];

export function SplitGlitch() {
  return (
    <div className="glitch-demo">
      {splits.map((split) => (
        <GlitchTile key={split} label={`split={${split}}`}>
          <Glitch variant="rgb" split={split} className="glitch-demo__host">
            <GlitchImage compact />
          </Glitch>
        </GlitchTile>
      ))}
    </div>
  );
}

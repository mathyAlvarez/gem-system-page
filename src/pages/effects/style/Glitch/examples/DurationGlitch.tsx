import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

const durations = [1200, 2200, 4000];

export function DurationGlitch() {
  return (
    <div className="glitch-demo">
      {durations.map((duration) => (
        <GlitchTile key={duration} label={`duration={${duration}}`}>
          <Glitch duration={duration} className="glitch-demo__host">
            <GlitchImage compact />
          </Glitch>
        </GlitchTile>
      ))}
    </div>
  );
}

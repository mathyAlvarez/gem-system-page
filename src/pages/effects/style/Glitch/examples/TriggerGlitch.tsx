import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import { GLITCH_TRIGGERS } from "./demo.ts";
import "./glitch-demo.css";

export function TriggerGlitch() {
  return (
    <div className="glitch-demo">
      {GLITCH_TRIGGERS.map((trigger) => (
        <GlitchTile key={trigger} label={`trigger="${trigger}"`}>
          <Glitch trigger={trigger} className="glitch-demo__host">
            <GlitchImage compact />
          </Glitch>
        </GlitchTile>
      ))}
    </div>
  );
}

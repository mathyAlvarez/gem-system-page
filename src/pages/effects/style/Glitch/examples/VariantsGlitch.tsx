import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import { GLITCH_VARIANTS } from "./demo.ts";
import "./glitch-demo.css";

export function VariantsGlitch() {
  return (
    <div className="glitch-demo">
      {GLITCH_VARIANTS.map((variant) => (
        <GlitchTile key={variant} label={`variant="${variant}"`}>
          <Glitch variant={variant} className="glitch-demo__host">
            <GlitchImage compact />
          </Glitch>
        </GlitchTile>
      ))}
    </div>
  );
}

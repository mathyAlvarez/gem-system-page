import { Meteors } from "@gem-org/gemffects/meteors";
import { METEOR_VARIANTS } from "./demo.ts";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

export function VariantsMeteors() {
  return (
    <div className="mt-demo">
      {METEOR_VARIANTS.map((variant) => (
        <MeteorTile key={variant} label={`variant="${variant}"`}>
          <Meteors variant={variant} intensity="lg" className="mt-demo__host mt-demo__host--sm">
            <p className="mt-demo__copy">{variant}</p>
          </Meteors>
        </MeteorTile>
      ))}
    </div>
  );
}

import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import { FLOAT_VARIANT_DURATIONS, FLOAT_VARIANTS } from "./demo.ts";
import "./float-demo.css";

export function VariantsFloat() {
  return (
    <div className="float-demo">
      {FLOAT_VARIANTS.map((variant) => (
        <FloatTile key={variant} label={`variant="${variant}"`}>
          <Float
            variant={variant}
            duration={FLOAT_VARIANT_DURATIONS[variant]}
            className="float-demo__host"
          >
            <span className="float-demo__target">{variant}</span>
          </Float>
        </FloatTile>
      ))}
    </div>
  );
}

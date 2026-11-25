import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import { FLICKER_VARIANTS, FLICKER_VARIANT_DURATIONS } from "./demo.ts";
import "./flicker-demo.css";

export function VariantsFlicker() {
  return (
    <div className="flicker-demo">
      {FLICKER_VARIANTS.map((variant) => (
        <FlickerTile key={variant} label={`variant="${variant}"`}>
          <Flicker
            variant={variant}
            duration={FLICKER_VARIANT_DURATIONS[variant]}
            className="flicker-demo__host"
          >
            <span className={variant === "text" ? "flicker-demo__copy" : "flicker-demo__target"}>
              {variant}
            </span>
          </Flicker>
        </FlickerTile>
      ))}
    </div>
  );
}

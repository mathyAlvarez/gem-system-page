import { Shine } from "@gem-org/gem-system";
import { SHINE_INTENSITIES } from "./demo.ts";
import "./shine-demo.css";

export function IntensityShine() {
  return (
    <div className="shine-demo__row">
      {SHINE_INTENSITIES.map((intensity) => (
        <div key={intensity} className="shine-demo__stack">
          <p className="shine-demo__label">{intensity}</p>
          <Shine intensity={intensity}>
            <span className="shine-tile shine-tile--portrait" />
          </Shine>
        </div>
      ))}
    </div>
  );
}

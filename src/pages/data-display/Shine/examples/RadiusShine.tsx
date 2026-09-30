import { Shine } from "@gem-org/gem-system";
import { SHINE_RADII } from "./demo.ts";
import "./shine-demo.css";

export function RadiusShine() {
  return (
    <div className="shine-demo__row">
      {SHINE_RADII.map((radius) => (
        <div key={radius} className="shine-demo__stack">
          <p className="shine-demo__label">{radius}</p>
          <Shine radius={radius} intensity="lg" duration={1600} interval={2400}>
            <span className="shine-tile shine-tile--square" />
          </Shine>
        </div>
      ))}
    </div>
  );
}

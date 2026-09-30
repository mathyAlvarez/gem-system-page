import { Shine } from "@gem-org/gem-system";
import { SHINE_TONES } from "./demo.ts";
import "./shine-demo.css";

export function TonesShine() {
  return (
    <div className="shine-demo__row">
      {SHINE_TONES.map((tone) => (
        <div key={tone} className="shine-demo__stack">
          <p className="shine-demo__label">{tone}</p>
          <Shine tone={tone} intensity="lg">
            <span className="shine-tile shine-tile--small shine-tile--dark" />
          </Shine>
        </div>
      ))}
    </div>
  );
}

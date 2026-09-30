import { Shine } from "@gem-org/gem-system";
import { SHINE_TONES } from "./demo.ts";
import "./shine-demo.css";

export function BurstShine() {
  return (
    <div className="shine-demo__row">
      {SHINE_TONES.map((tone) => (
        <Shine key={tone} effect="burst" tone={tone} duration={1200} interval={2500}>
          <span className="shine-tile shine-tile--small shine-tile--dark" />
        </Shine>
      ))}
    </div>
  );
}

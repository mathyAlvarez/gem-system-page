import { Shine } from "@gem-org/gem-system";
import "./shine-demo.css";

const ANGLES = [90, 125, 180];

export function AngleShine() {
  return (
    <div className="shine-demo__row">
      {ANGLES.map((angle) => (
        <div key={angle} className="shine-demo__stack">
          <p className="shine-demo__label">{angle}°</p>
          <Shine angle={angle} intensity="lg" duration={1600} interval={2400}>
            <span className="shine-tile shine-tile--small shine-tile--dark" />
          </Shine>
        </div>
      ))}
    </div>
  );
}

import { Shine } from "@gem-org/gem-system";
import "./shine-demo.css";

const INTERVALS = [500, 2000, 4000, 8000];

export function IntervalShine() {
  return (
    <div className="shine-demo__row">
      {INTERVALS.map((interval) => (
        <div key={interval} className="shine-demo__stack">
          <p className="shine-demo__label">{interval} ms</p>
          <Shine interval={interval} duration={Math.min(1200, interval)} intensity="lg">
            <span className="shine-tile shine-tile--square shine-tile--dark" />
          </Shine>
        </div>
      ))}
    </div>
  );
}

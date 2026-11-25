import { Shine } from "@gem-org/gem-system";
import "./shine-demo.css";

export function ColorShine() {
  return (
    <div className="shine-demo__row">
      <Shine color="var(--gem-palette-tertiary-200)" intensity="lg">
        <span className="shine-tile shine-tile--dark" />
      </Shine>
      <Shine
        color="var(--gem-palette-secondary-200)"
        intensity="lg"
        effect="burst"
        duration={1200}
        interval={2500}
      >
        <span className="shine-tile shine-tile--dark" />
      </Shine>
    </div>
  );
}

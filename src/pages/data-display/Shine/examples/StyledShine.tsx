import { Shine } from "@gem-org/gem-system";
import "./shine-demo.css";
import "./shine-overrides.css";

type StyledShineProps = { label: string };

export function StyledShine({ label }: StyledShineProps) {
  return (
    <div className="shine-demo__row">
      <Shine className="shine-branded" radius="lg">
        <span className="shine-tile shine-tile--dark">{label}</span>
      </Shine>
      <Shine className="shine-stars" effect="burst" tone="gold" radius="lg" duration={1400} interval={2500}>
        <span className="shine-tile shine-tile--dark">{label}</span>
      </Shine>
    </div>
  );
}

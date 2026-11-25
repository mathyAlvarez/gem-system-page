import { Indicator } from "@gem-org/gem-system";
import "./indicator-demo.css";

const RADII = ["none", "lg", "full"] as const;

type RadiusIndicatorProps = { label: string };

export function RadiusIndicator({ label }: RadiusIndicatorProps) {
  return (
    <div className="indicator-row">
      {RADII.map((radius) => (
        <div key={radius} className="indicator-stack">
          <p className="indicator-caption">{radius}</p>
          <Indicator radius={radius} size="sm" label={label}>
            <span className={`indicator-tile indicator-tile--radius-${radius}`} />
          </Indicator>
        </div>
      ))}
    </div>
  );
}

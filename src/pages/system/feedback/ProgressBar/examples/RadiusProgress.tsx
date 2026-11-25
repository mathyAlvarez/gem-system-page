import { ProgressBar } from "@gem-org/gem-system";
import { PROGRESS_RADII } from "./demo.ts";
import "./progress-demo.css";

type RadiusProgressProps = { ariaLabel: string };

export function RadiusProgress({ ariaLabel }: RadiusProgressProps) {
  return (
    <div className="progress-stack">
      {PROGRESS_RADII.map((radius) => (
        <div key={radius} className="progress-item">
          <p className="progress-caption">{radius}</p>
          <ProgressBar radius={radius} size="lg" value={42} aria-label={`${ariaLabel} ${radius}`} />
        </div>
      ))}
    </div>
  );
}

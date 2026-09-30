import { ProgressBar } from "@gem-org/gem-system";
import { PROGRESS_TONES } from "./demo.ts";
import "./progress-demo.css";

type TonesProgressProps = { ariaLabel: string };

export function TonesProgress({ ariaLabel }: TonesProgressProps) {
  return (
    <div className="progress-stack">
      {PROGRESS_TONES.map((tone) => (
        <div key={tone} className="progress-item">
          <p className="progress-caption">{tone}</p>
          <ProgressBar tone={tone} value={42} aria-label={`${ariaLabel} ${tone}`} />
        </div>
      ))}
    </div>
  );
}

import { Spinner } from "@gem-org/gem-system";
import { SPINNER_TONES } from "./demo.ts";
import "./spinner-demo.css";

type TonesSpinnerProps = { ariaLabel: string; inherits: string };

export function TonesSpinner({ ariaLabel, inherits }: TonesSpinnerProps) {
  return (
    <div className="spinner-row">
      {SPINNER_TONES.map((tone) => (
        <div key={tone} className="spinner-item">
          <p className="spinner-caption">{tone}</p>
          {tone === "current" ? (
            <span className="spinner-surface">
              <Spinner tone="current" size="sm" label={inherits} classNames={{ label: "text-current" }} />
            </span>
          ) : (
            <Spinner tone={tone} size="lg" aria-label={ariaLabel} />
          )}
        </div>
      ))}
    </div>
  );
}

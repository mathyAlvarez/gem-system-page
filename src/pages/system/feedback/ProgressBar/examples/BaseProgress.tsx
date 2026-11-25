import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type BaseProgressProps = { ariaLabel: string };

export function BaseProgress({ ariaLabel }: BaseProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar value={42} aria-label={ariaLabel} />
    </div>
  );
}

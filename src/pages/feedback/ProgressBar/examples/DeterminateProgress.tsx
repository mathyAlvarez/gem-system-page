import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type DeterminateProgressProps = { label: string };

export function DeterminateProgress({ label }: DeterminateProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar label={label} value={64} showValue />
    </div>
  );
}

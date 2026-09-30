import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type IndeterminateProgressProps = { label: string };

export function IndeterminateProgress({ label }: IndeterminateProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar label={label} isIndeterminate />
    </div>
  );
}

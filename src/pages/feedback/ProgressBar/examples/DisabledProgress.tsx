import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type DisabledProgressProps = { paused: string; waiting: string };

export function DisabledProgress({ paused, waiting }: DisabledProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar label={paused} value={48} showValue showThumb disabled />
      <ProgressBar label={waiting} isIndeterminate disabled />
    </div>
  );
}

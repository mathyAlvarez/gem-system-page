import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";
import "./progress-overrides.css";

type StyledProgressProps = { label: string };

export function StyledProgress({ label }: StyledProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar className="progress-branded" label={label} value={64} showValue showThumb />
    </div>
  );
}

import { ProgressBar, type ProgressBarTone } from "@gem-org/gem-system";
import "./progress-demo.css";

type Quota = { name: string; used: number };

type ThresholdProgressProps = { quotas: Quota[]; of: string };

const toneFor = (used: number): ProgressBarTone => {
  if (used >= 90) return "error";
  if (used >= 70) return "warning";
  return "success";
};

export function ThresholdProgress({ quotas, of }: ThresholdProgressProps) {
  return (
    <div className="progress-stack">
      {quotas.map((quota) => (
        <ProgressBar
          key={quota.name}
          label={quota.name}
          value={quota.used}
          tone={toneFor(quota.used)}
          showValue
          formatValue={(value, max) => `${value} ${of} ${max} GB`}
        />
      ))}
    </div>
  );
}

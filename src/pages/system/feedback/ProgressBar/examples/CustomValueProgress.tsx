import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type CustomValueProgressProps = {
  files: string;
  of: string;
  storage: string;
  storageValue: string;
  storageValueText: string;
};

export function CustomValueProgress({
  files,
  of,
  storage,
  storageValue,
  storageValueText,
}: CustomValueProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar
        label={files}
        value={12}
        min={0}
        max={40}
        showValue
        formatValue={(value, max) => `${value} ${of} ${max}`}
      />
      <ProgressBar
        label={storage}
        value={78}
        tone="warning"
        valueLabel={storageValue}
        aria-valuetext={storageValueText}
      />
    </div>
  );
}

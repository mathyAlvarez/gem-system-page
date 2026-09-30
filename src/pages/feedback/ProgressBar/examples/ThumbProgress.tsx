import { ProgressBar } from "@gem-org/gem-system";
import { CheckCircle, Upload } from "@gem-org/gem-system/icons";
import "./progress-demo.css";

type ThumbProgressProps = { syncing: string; uploading: string; done: string };

export function ThumbProgress({ syncing, uploading, done }: ThumbProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar label={syncing} value={32} showValue showThumb />
      <ProgressBar label={uploading} value={58} showValue thumbIcon={Upload} />
      <ProgressBar
        label={done}
        value={100}
        tone="success"
        showValue
        thumbIcon={<CheckCircle size="sm" strokeWidth={2.2} />}
      />
    </div>
  );
}

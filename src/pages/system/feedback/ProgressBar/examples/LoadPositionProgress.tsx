import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type LoadPositionProgressProps = { download: string; upload: string };

export function LoadPositionProgress({ download, upload }: LoadPositionProgressProps) {
  return (
    <div className="progress-stack">
      <div className="progress-item">
        <p className="progress-caption">loadPosition="right"</p>
        <ProgressBar label={download} value={42} loadPosition="right" showValue showThumb />
      </div>
      <div className="progress-item">
        <p className="progress-caption">loadPosition="left"</p>
        <ProgressBar label={upload} value={42} loadPosition="left" showValue showThumb />
      </div>
    </div>
  );
}

import { ProgressBar } from "@gem-org/gem-system";
import { PROGRESS_SIZES } from "./demo.ts";
import "./progress-demo.css";

type SizesProgressProps = { ariaLabel: string };

export function SizesProgress({ ariaLabel }: SizesProgressProps) {
  return (
    <div className="progress-stack">
      {PROGRESS_SIZES.map((size) => (
        <div key={size} className="progress-item">
          <p className="progress-caption">{size}</p>
          <ProgressBar size={size} value={42} aria-label={`${ariaLabel} ${size}`} />
        </div>
      ))}
    </div>
  );
}

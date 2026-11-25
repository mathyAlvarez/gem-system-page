import { Progress } from "@gem-org/gem-system";
import "./progress-demo.css";

type AliasProgressProps = { label: string };

export function AliasProgress({ label }: AliasProgressProps) {
  return (
    <div className="progress-stack">
      <Progress label={label} value={55} showValue />
    </div>
  );
}

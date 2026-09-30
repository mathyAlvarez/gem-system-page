import { Spinner } from "@gem-org/gem-system";
import "./spinner-demo.css";

type InlineSpinnerProps = { syncing: string; saving: string };

export function InlineSpinner({ syncing, saving }: InlineSpinnerProps) {
  return (
    <div className="spinner-row">
      <span className="spinner-chip">
        <Spinner size="sm" tone="current" aria-hidden />
        {syncing}
      </span>
      <span className="spinner-surface">
        <Spinner size="sm" tone="current" variant="dots" label={saving} classNames={{ label: "text-current" }} />
      </span>
    </div>
  );
}

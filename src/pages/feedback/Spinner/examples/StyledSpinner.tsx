import { Spinner } from "@gem-org/gem-system";
import "./spinner-demo.css";
import "./spinner-overrides.css";

type StyledSpinnerProps = { label: string };

export function StyledSpinner({ label }: StyledSpinnerProps) {
  return (
    <div className="spinner-row">
      <Spinner className="spinner-branded" size="lg" label={label} />
      <Spinner className="spinner-branded" variant="circle-dots" size="lg" label={label} />
    </div>
  );
}

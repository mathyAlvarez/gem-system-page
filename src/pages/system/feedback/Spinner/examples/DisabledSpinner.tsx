import { Spinner } from "@gem-org/gem-system";
import "./spinner-demo.css";

type DisabledSpinnerProps = { label: string };

export function DisabledSpinner({ label }: DisabledSpinnerProps) {
  return (
    <div className="spinner-row">
      <Spinner label={label} disabled />
      <Spinner variant="dots" label={label} disabled />
    </div>
  );
}

import { Spinner } from "@gem-org/gem-system";

type LabelSpinnerProps = { label: string };

export function LabelSpinner({ label }: LabelSpinnerProps) {
  return <Spinner label={label} />;
}

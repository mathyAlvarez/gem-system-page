import { Spinner } from "@gem-org/gem-system";

type BaseSpinnerProps = { ariaLabel: string };

export function BaseSpinner({ ariaLabel }: BaseSpinnerProps) {
  return <Spinner aria-label={ariaLabel} />;
}

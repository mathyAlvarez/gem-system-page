import { Loader } from "@gem-org/gem-system";

type AliasSpinnerProps = { label: string };

export function AliasSpinner({ label }: AliasSpinnerProps) {
  return <Loader label={label} />;
}

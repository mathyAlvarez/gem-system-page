import { Radio } from "@gem-org/gem-system";

export function RadioWithoutLabel({ ariaLabel }: { ariaLabel: string }) {
  return <Radio name="radio-unlabelled" value="on" aria-label={ariaLabel} defaultChecked />;
}

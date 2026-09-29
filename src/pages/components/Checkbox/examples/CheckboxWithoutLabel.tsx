import { Checkbox } from "@gem-org/gem-system";

export function CheckboxWithoutLabel({ ariaLabel }: { ariaLabel: string }) {
  return <Checkbox aria-label={ariaLabel} defaultChecked />;
}

import { Checkbox } from "@gem-org/gem-system";

export function CheckedCheckbox({ label }: { label: string }) {
  return <Checkbox label={label} defaultChecked />;
}

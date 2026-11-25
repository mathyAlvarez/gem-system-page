import { Checkbox } from "@gem-org/gem-system";

export function BaseCheckbox({ label, helperText }: { label: string; helperText: string }) {
  return <Checkbox label={label} helperText={helperText} />;
}

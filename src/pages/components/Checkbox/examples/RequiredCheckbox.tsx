import { Checkbox } from "@gem-org/gem-system";

export function RequiredCheckbox({ label, helperText }: { label: string; helperText: string }) {
  return <Checkbox label={label} helperText={helperText} isRequired />;
}

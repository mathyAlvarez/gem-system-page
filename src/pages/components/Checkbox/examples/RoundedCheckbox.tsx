import { Checkbox } from "@gem-org/gem-system";

export function RoundedCheckbox({ label, helperText }: { label: string; helperText: string }) {
  return <Checkbox label={label} helperText={helperText} rounded defaultChecked />;
}

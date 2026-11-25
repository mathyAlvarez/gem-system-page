import { Radio } from "@gem-org/gem-system";

export function CheckedRadio({ label }: { label: string }) {
  return <Radio name="radio-checked" value="yes" label={label} defaultChecked />;
}

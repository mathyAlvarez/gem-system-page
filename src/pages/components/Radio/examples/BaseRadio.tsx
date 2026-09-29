import { Radio } from "@gem-org/gem-system";

export function BaseRadio({ label, helperText }: { label: string; helperText: string }) {
  return <Radio name="radio-base" value="yes" label={label} helperText={helperText} />;
}

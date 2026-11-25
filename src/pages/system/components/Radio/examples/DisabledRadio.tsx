import { Radio } from "@gem-org/gem-system";

export function DisabledRadio({ label, helperText }: { label: string; helperText: string }) {
  return (
    <Radio
      name="radio-disabled"
      value="yes"
      label={label}
      helperText={helperText}
      isDisabled
      defaultChecked
    />
  );
}

import { InputMask } from "@gem-org/gem-system";

type TimeInputMaskProps = { label: string; helperText: string };

export function TimeInputMask({ label, helperText }: TimeInputMaskProps) {
  return <InputMask label={label} preset="time" helperText={helperText} />;
}

import { InputMask } from "@gem-org/gem-system";

type DateIsoInputMaskProps = { label: string; helperText: string };

export function DateIsoInputMask({ label, helperText }: DateIsoInputMaskProps) {
  return <InputMask label={label} preset="date-iso" helperText={helperText} />;
}

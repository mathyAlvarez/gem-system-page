import { InputMask } from "@gem-org/gem-system";
import { Calendar } from "@gem-org/gem-system/icons";

type PrefixIconTextInputMaskProps = { label: string; helperText: string };

export function PrefixIconTextInputMask({ label, helperText }: PrefixIconTextInputMaskProps) {
  return (
    <InputMask label={label} preset="date" prefix="UTC" prefixIcon={<Calendar size="sm" />} helperText={helperText} />
  );
}

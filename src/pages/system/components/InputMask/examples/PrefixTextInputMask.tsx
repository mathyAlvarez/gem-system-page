import { InputMask } from "@gem-org/gem-system";

type PrefixTextInputMaskProps = { label: string; helperText: string };

export function PrefixTextInputMask({ label, helperText }: PrefixTextInputMaskProps) {
  return <InputMask label={label} preset="phone" prefix="Tel" helperText={helperText} />;
}

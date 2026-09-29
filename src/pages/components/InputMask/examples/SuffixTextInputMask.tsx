import { InputMask } from "@gem-org/gem-system";

type SuffixTextInputMaskProps = { label: string; helperText: string };

export function SuffixTextInputMask({ label, helperText }: SuffixTextInputMaskProps) {
  return <InputMask label={label} preset="card" suffix="USD" helperText={helperText} />;
}

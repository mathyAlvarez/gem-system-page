import { InputText } from "@gem-org/gem-system";

type SuffixTextInputTextProps = { label: string; helperText: string };

export function SuffixTextInputText({ label, helperText }: SuffixTextInputTextProps) {
  return <InputText label={label} suffix="EUR" placeholder="0.00" helperText={helperText} />;
}

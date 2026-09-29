import { InputText } from "@gem-org/gem-system";

type PrefixSuffixInputTextProps = { label: string; helperText: string };

export function PrefixSuffixInputText({ label, helperText }: PrefixSuffixInputTextProps) {
  return <InputText label={label} prefix="$" suffix="USD" placeholder="0.00" helperText={helperText} />;
}

import { InputText } from "@gem-org/gem-system";

type PrefixTextInputTextProps = { label: string; placeholder: string; helperText: string };

export function PrefixTextInputText({ label, placeholder, helperText }: PrefixTextInputTextProps) {
  return <InputText label={label} prefix="https://" placeholder={placeholder} helperText={helperText} />;
}

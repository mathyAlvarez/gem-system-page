import { InputText } from "@gem-org/gem-system";

type RequiredInputTextProps = { label: string; placeholder: string; helperText: string };

export function RequiredInputText({ label, placeholder, helperText }: RequiredInputTextProps) {
  return <InputText label={label} placeholder={placeholder} isRequired helperText={helperText} />;
}

import { InputText } from "@gem-org/gem-system";

type BaseInputTextProps = { label: string; placeholder: string; helperText: string };

export function BaseInputText({ label, placeholder, helperText }: BaseInputTextProps) {
  return <InputText label={label} placeholder={placeholder} helperText={helperText} />;
}

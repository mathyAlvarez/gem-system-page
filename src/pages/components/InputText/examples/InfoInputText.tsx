import { InputText } from "@gem-org/gem-system";

type InfoInputTextProps = { label: string; placeholder: string; infoText: string; helperText: string };

export function InfoInputText({ label, placeholder, infoText, helperText }: InfoInputTextProps) {
  return <InputText label={label} placeholder={placeholder} infoText={infoText} helperText={helperText} />;
}

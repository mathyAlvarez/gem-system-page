import { InputText } from "@gem-org/gem-system";

type OutlineInfoInputTextProps = { label: string; placeholder: string; infoText: string };

export function OutlineInfoInputText({ label, placeholder, infoText }: OutlineInfoInputTextProps) {
  return (
    <InputText
      label={label}
      labelPlacement="outline"
      border="outlined"
      placeholder={placeholder}
      infoText={infoText}
    />
  );
}

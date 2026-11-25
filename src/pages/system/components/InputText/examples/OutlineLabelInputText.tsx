import { InputText } from "@gem-org/gem-system";

type OutlineLabelInputTextProps = { label: string; placeholder: string; helperText: string };

export function OutlineLabelInputText({
  label,
  placeholder,
  helperText,
}: OutlineLabelInputTextProps) {
  return (
    <InputText
      label={label}
      labelPlacement="outline"
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

import { InputPassword } from "@gem-org/gem-system";

type NoToggleInputPasswordProps = { label: string; placeholder: string; helperText: string };

export function NoToggleInputPassword({
  label,
  placeholder,
  helperText,
}: NoToggleInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      placeholder={placeholder}
      showToggle={false}
      helperText={helperText}
    />
  );
}

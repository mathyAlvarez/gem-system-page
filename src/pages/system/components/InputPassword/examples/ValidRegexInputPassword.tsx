import { InputPassword } from "@gem-org/gem-system";
import { Lock } from "@gem-org/gem-system/icons";

type ValidRegexInputPasswordProps = { label: string; placeholder: string; helperText: string };

export function ValidRegexInputPassword({
  label,
  placeholder,
  helperText,
}: ValidRegexInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      placeholder={placeholder}
      validRegex="^.{8,}$"
      helperText={helperText}
      prefixIcon={<Lock size="sm" />}
    />
  );
}

import { InputPassword } from "@gem-org/gem-system";
import { CheckCircle, Lock } from "@gem-org/gem-system/icons";

type SuffixToggleInputPasswordProps = { label: string; placeholder: string; helperText: string };

export function SuffixToggleInputPassword({ label, placeholder, helperText }: SuffixToggleInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      placeholder={placeholder}
      prefixIcon={<Lock size="sm" />}
      suffixIcon={<CheckCircle size="sm" />}
      helperText={helperText}
    />
  );
}

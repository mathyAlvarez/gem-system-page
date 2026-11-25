import { InputPassword } from "@gem-org/gem-system";
import { Lock } from "@gem-org/gem-system/icons";

type PrefixInputPasswordProps = { label: string; placeholder: string; helperText: string };

export function PrefixInputPassword({ label, placeholder, helperText }: PrefixInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      placeholder={placeholder}
      prefixIcon={<Lock size="sm" />}
      helperText={helperText}
    />
  );
}

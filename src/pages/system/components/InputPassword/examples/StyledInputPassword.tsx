import { InputPassword } from "@gem-org/gem-system";
import { Lock } from "@gem-org/gem-system/icons";
import "./input-password-overrides.css";

type StyledInputPasswordProps = { label: string; helperText: string };

export function StyledInputPassword({ label, helperText }: StyledInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      defaultValue="opensesame"
      prefixIcon={<Lock size="sm" />}
      helperText={helperText}
      wrapperClassName="input-password-branded"
    />
  );
}

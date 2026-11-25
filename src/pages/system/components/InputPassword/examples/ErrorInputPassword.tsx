import { InputPassword } from "@gem-org/gem-system";
import { Lock } from "@gem-org/gem-system/icons";

type ErrorInputPasswordProps = { label: string; errorMessage: string };

export function ErrorInputPassword({ label, errorMessage }: ErrorInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      defaultValue="123"
      isInvalid
      errorMessage={errorMessage}
      prefixIcon={<Lock size="sm" />}
    />
  );
}

import { InputPassword } from "@gem-org/gem-system";
import { Lock } from "@gem-org/gem-system/icons";

type DisabledInputPasswordProps = { label: string };

export function DisabledInputPassword({ label }: DisabledInputPasswordProps) {
  return (
    <InputPassword label={label} defaultValue="secret" isDisabled prefixIcon={<Lock size="sm" />} />
  );
}

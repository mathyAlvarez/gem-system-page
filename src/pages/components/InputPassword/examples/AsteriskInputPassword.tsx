import { InputPassword } from "@gem-org/gem-system";

type AsteriskInputPasswordProps = { label: string; helperText: string };

export function AsteriskInputPassword({ label, helperText }: AsteriskInputPasswordProps) {
  return <InputPassword label={label} defaultValue="secret123" maskCharacter="*" helperText={helperText} />;
}

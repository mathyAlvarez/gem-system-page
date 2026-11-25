import { InputPassword } from "@gem-org/gem-system";

type MaskCharacterInputPasswordProps = { label: string; helperText: string };

export function MaskCharacterInputPassword({ label, helperText }: MaskCharacterInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      defaultValue="opensesame"
      maskCharacter="●"
      helperText={helperText}
    />
  );
}

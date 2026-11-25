import { InputText } from "@gem-org/gem-system";
import { User } from "@gem-org/gem-system/icons";

type DisabledInputTextProps = { label: string; helperText: string };

export function DisabledInputText({ label, helperText }: DisabledInputTextProps) {
  return (
    <InputText
      label={label}
      defaultValue="ACC-2048"
      isDisabled
      helperText={helperText}
      prefixIcon={<User size="sm" />}
    />
  );
}

import { InputText } from "@gem-org/gem-system";
import { Search, User } from "@gem-org/gem-system/icons";

type IconsInputTextProps = { label: string; placeholder: string; helperText: string };

export function IconsInputText({ label, placeholder, helperText }: IconsInputTextProps) {
  return (
    <InputText
      label={label}
      placeholder={placeholder}
      prefixIcon={<User size="sm" />}
      suffixIcon={<Search size="sm" />}
      helperText={helperText}
    />
  );
}

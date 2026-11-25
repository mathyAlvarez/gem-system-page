import { InputText } from "@gem-org/gem-system";
import { User } from "@gem-org/gem-system/icons";
import "./input-text-overrides.css";

type StyledInputTextProps = { label: string; placeholder: string; helperText: string };

export function StyledInputText({ label, placeholder, helperText }: StyledInputTextProps) {
  return (
    <InputText
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      prefixIcon={<User size="sm" />}
      wrapperClassName="input-text-soft"
    />
  );
}

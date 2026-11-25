import { InputText } from "@gem-org/gem-system";
import { Mail } from "@gem-org/gem-system/icons";

type PrefixIconInputTextProps = { label: string; placeholder: string };

export function PrefixIconInputText({ label, placeholder }: PrefixIconInputTextProps) {
  return (
    <InputText
      label={label}
      type="email"
      placeholder={placeholder}
      prefixIcon={<Mail size="sm" />}
    />
  );
}

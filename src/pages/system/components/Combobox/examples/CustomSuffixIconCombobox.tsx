import { Combobox } from "@gem-org/gem-system";
import { User } from "@gem-org/gem-system/icons";
import { COUNTRIES } from "./data";

type CustomSuffixIconComboboxProps = { label: string; placeholder: string; helperText: string };

export function CustomSuffixIconCombobox({
  label,
  placeholder,
  helperText,
}: CustomSuffixIconComboboxProps) {
  return (
    <Combobox
      label={label}
      options={COUNTRIES}
      suffixIcon={<User size="sm" strokeWidth={2.1} />}
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

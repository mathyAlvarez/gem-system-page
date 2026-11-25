import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type NoSuffixIconComboboxProps = { label: string; placeholder: string; helperText: string };

export function NoSuffixIconCombobox({
  label,
  placeholder,
  helperText,
}: NoSuffixIconComboboxProps) {
  return (
    <Combobox
      label={label}
      options={COUNTRIES}
      multiple
      suffixIcon={null}
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

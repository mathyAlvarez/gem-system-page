import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type MultipleComboboxProps = { label: string; placeholder: string; helperText: string };

export function MultipleCombobox({ label, placeholder, helperText }: MultipleComboboxProps) {
  return (
    <Combobox
      label={label}
      options={COUNTRIES}
      multiple
      defaultValue={["ar", "uy"]}
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

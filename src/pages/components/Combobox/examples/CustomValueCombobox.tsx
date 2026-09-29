import { Combobox } from "@gem-org/gem-system";
import { LIBRARIES } from "./data";

type CustomValueComboboxProps = { label: string; placeholder: string; helperText: string };

export function CustomValueCombobox({ label, placeholder, helperText }: CustomValueComboboxProps) {
  return (
    <Combobox
      label={label}
      options={LIBRARIES}
      allowsCustomValue
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

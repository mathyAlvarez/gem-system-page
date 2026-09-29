import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type ChevronComboboxProps = { label: string; placeholder: string; helperText: string };

export function ChevronCombobox({ label, placeholder, helperText }: ChevronComboboxProps) {
  return (
    <Combobox
      label={label}
      options={COUNTRIES}
      multiple
      showExpand
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

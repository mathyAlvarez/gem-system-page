import { Combobox } from "@gem-org/gem-system";
import { CITIES } from "./data";

type MaxResultsComboboxProps = { label: string; placeholder: string; helperText: string };

export function MaxResultsCombobox({ label, placeholder, helperText }: MaxResultsComboboxProps) {
  return (
    <Combobox
      label={label}
      options={CITIES}
      maxResults={3}
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

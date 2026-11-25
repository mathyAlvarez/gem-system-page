import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type LoadingComboboxProps = { label: string; placeholder: string; helperText: string };

export function LoadingCombobox({ label, placeholder, helperText }: LoadingComboboxProps) {
  return (
    <Combobox
      label={label}
      options={COUNTRIES}
      loading
      placeholder={placeholder}
      helperText={helperText}
    />
  );
}

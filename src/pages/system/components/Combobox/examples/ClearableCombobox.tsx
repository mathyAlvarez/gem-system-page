import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type ClearableComboboxProps = { label: string; helperText: string };

export function ClearableCombobox({ label, helperText }: ClearableComboboxProps) {
  return (
    <Combobox
      label={label}
      options={COUNTRIES}
      clearable
      defaultValue="mx"
      helperText={helperText}
    />
  );
}

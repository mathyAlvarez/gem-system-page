import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type DisabledComboboxProps = { label: string; helperText: string };

export function DisabledCombobox({ label, helperText }: DisabledComboboxProps) {
  return (
    <Combobox
      label={label}
      options={COUNTRIES}
      isDisabled
      defaultValue="ar"
      helperText={helperText}
    />
  );
}

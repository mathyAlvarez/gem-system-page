import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type BaseComboboxProps = { label: string; placeholder: string; helperText: string };

export function BaseCombobox({ label, placeholder, helperText }: BaseComboboxProps) {
  return <Combobox label={label} options={COUNTRIES} placeholder={placeholder} helperText={helperText} />;
}

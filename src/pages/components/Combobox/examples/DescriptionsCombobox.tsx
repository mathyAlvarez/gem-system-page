import { Combobox } from "@gem-org/gem-system";
import { CITIES } from "./data";

type DescriptionsComboboxProps = { label: string; placeholder: string; helperText: string };

export function DescriptionsCombobox({ label, placeholder, helperText }: DescriptionsComboboxProps) {
  return <Combobox label={label} options={CITIES} placeholder={placeholder} helperText={helperText} />;
}

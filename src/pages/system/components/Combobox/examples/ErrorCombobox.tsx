import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type ErrorComboboxProps = { label: string; errorMessage: string };

export function ErrorCombobox({ label, errorMessage }: ErrorComboboxProps) {
  return <Combobox label={label} options={COUNTRIES} isRequired errorMessage={errorMessage} />;
}

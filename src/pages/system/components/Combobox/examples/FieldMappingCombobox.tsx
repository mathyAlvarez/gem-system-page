import { Combobox } from "@gem-org/gem-system";
import { USERS } from "./data";

type FieldMappingComboboxProps = { label: string; helperText: string };

export function FieldMappingCombobox({ label, helperText }: FieldMappingComboboxProps) {
  return (
    <Combobox
      label={label}
      options={USERS}
      optionValue="id"
      optionLabel="name"
      optionDescription="role"
      optionDisabled={(user) => !user.active}
      defaultValue="u1"
      helperText={helperText}
    />
  );
}

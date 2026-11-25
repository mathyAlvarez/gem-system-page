import { Select } from "@gem-org/gem-system";

type User = { id: string; name: string; role: string; active: boolean };

type FieldMappingSelectProps = {
  users: readonly User[];
  texts: { label: string; helperText: string; searchPlaceholder: string; noResultsText: string };
};

export function FieldMappingSelect({ users, texts }: FieldMappingSelectProps) {
  return (
    <Select
      label={texts.label}
      options={users}
      optionValue="id"
      optionLabel="name"
      optionDescription="role"
      optionDisabled={(user) => !user.active}
      defaultValue="u1"
      helperText={texts.helperText}
      searchPlaceholder={texts.searchPlaceholder}
      noResultsText={texts.noResultsText}
    />
  );
}

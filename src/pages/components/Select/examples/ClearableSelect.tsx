import { Select, type SelectOption } from "@gem-org/gem-system";

type ClearableSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string; placeholder: string; helperText: string; searchPlaceholder: string; noResultsText: string };
};

export function ClearableSelect({ options, texts }: ClearableSelectProps) {
  return (
    <Select
      label={texts.label}
      options={options}
      clearable
      defaultValue="mx"
      placeholder={texts.placeholder}
      helperText={texts.helperText}
      searchPlaceholder={texts.searchPlaceholder}
      noResultsText={texts.noResultsText}
    />
  );
}

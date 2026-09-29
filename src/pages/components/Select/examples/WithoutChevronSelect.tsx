import { Select, type SelectOption } from "@gem-org/gem-system";

type WithoutChevronSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string; helperText: string; searchPlaceholder: string; noResultsText: string };
};

export function WithoutChevronSelect({ options, texts }: WithoutChevronSelectProps) {
  return (
    <Select
      label={texts.label}
      options={options}
      showExpand={false}
      defaultValue="fr"
      helperText={texts.helperText}
      searchPlaceholder={texts.searchPlaceholder}
      noResultsText={texts.noResultsText}
    />
  );
}

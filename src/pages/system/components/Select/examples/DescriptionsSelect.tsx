import { Select, type SelectOption } from "@gem-org/gem-system";

type DescriptionsSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string; helperText: string };
};

export function DescriptionsSelect({ options, texts }: DescriptionsSelectProps) {
  return (
    <Select
      label={texts.label}
      options={options}
      defaultValue="editor"
      searchable={false}
      helperText={texts.helperText}
    />
  );
}

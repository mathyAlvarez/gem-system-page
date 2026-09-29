import { Select, type SelectOption } from "@gem-org/gem-system";

type WithoutSearchSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string };
};

export function WithoutSearchSelect({ options, texts }: WithoutSearchSelectProps) {
  return <Select label={texts.label} options={options} defaultValue="cl" searchable={false} />;
}

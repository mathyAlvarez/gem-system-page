import { Select, type SelectOption } from "@gem-org/gem-system";

type SelectSizesProps = {
  options: readonly SelectOption[];
  labels: { sm: string; md: string; lg: string };
};

export function SelectSizes({ options, labels }: SelectSizesProps) {
  return (
    <>
      <Select size="sm" label={labels.sm} options={options} defaultValue="br" searchable={false} />
      <Select size="md" label={labels.md} options={options} defaultValue="cl" searchable={false} />
      <Select size="lg" label={labels.lg} options={options} defaultValue="es" searchable={false} />
    </>
  );
}

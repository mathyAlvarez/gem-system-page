import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type ComboboxSizesProps = { labels: { sm: string; md: string; lg: string } };

export function ComboboxSizes({ labels }: ComboboxSizesProps) {
  return (
    <>
      <Combobox size="sm" label={labels.sm} options={COUNTRIES} defaultValue="ar" />
      <Combobox size="md" label={labels.md} options={COUNTRIES} defaultValue="br" />
      <Combobox size="lg" label={labels.lg} options={COUNTRIES} defaultValue="cl" />
    </>
  );
}

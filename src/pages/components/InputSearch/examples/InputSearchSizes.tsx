import { InputSearch } from "@gem-org/gem-system";

type InputSearchSizesProps = { labels: { sm: string; md: string; lg: string } };

export function InputSearchSizes({ labels }: InputSearchSizesProps) {
  return (
    <>
      <InputSearch size="sm" label={labels.sm} defaultValue="Ada" />
      <InputSearch size="md" label={labels.md} defaultValue="Alan" />
      <InputSearch size="lg" label={labels.lg} defaultValue="Grace" />
    </>
  );
}
